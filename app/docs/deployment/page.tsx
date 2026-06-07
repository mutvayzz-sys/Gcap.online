export const metadata = {
  title: "Deployment Guide - Documentation",
  description: "How to deploy Headmaster, prerequisites, and configuration",
};

export default function DeploymentPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>Deployment Guide</h1>

      <p>
        This guide covers deploying Headmaster to your organization, including prerequisites, configuration, and best practices for production environments.
      </p>

      <h2>Prerequisites</h2>

      <h3>System Requirements</h3>

      <h4>Minimum Specifications</h4>
      <ul>
        <li>2 CPU cores</li>
        <li>4 GB RAM</li>
        <li>20 GB storage (grows with agent memory)</li>
        <li>100 Mbps network connection</li>
      </ul>

      <h4>Recommended Production Specifications</h4>
      <ul>
        <li>8+ CPU cores</li>
        <li>32 GB RAM</li>
        <li>500 GB+ SSD storage</li>
        <li>Redundant 1 Gbps+ network connections</li>
      </ul>

      <h3>Required Infrastructure</h3>

      <h4>Cloud Providers</h4>
      <ul>
        <li>AWS (EC2, RDS, S3)</li>
        <li>Google Cloud (Compute Engine, Cloud SQL, Cloud Storage)</li>
        <li>Microsoft Azure (Virtual Machines, SQL Database, Blob Storage)</li>
        <li>Private data centers with Docker and Kubernetes support</li>
      </ul>

      <h4>Kubernetes (recommended for production)</h4>
      <ul>
        <li>Kubernetes 1.24 or later</li>
        <li>Helm 3.x for package management</li>
        <li>Persistent volume support (EBS, GCE, Azure Disks)</li>
        <li>Container registry access (ECR, GCR, ACR, or Docker Hub)</li>
      </ul>

      <h3>Required Accounts & Credentials</h3>

      <ol>
        <li><strong>LLM Provider</strong> (choose one or more)
          <ul>
            <li>Anthropic API key for Claude models</li>
            <li>OpenAI API key for GPT models</li>
            <li>Google AI API credentials</li>
            <li>Other model providers as needed</li>
          </ul>
        </li>
        <li><strong>Platform Integrations</strong> (optional, as needed)
          <ul>
            <li>Slack workspace admin access</li>
            <li>Microsoft Teams organization admin</li>
            <li>Gmail/Microsoft 365 service account</li>
            <li>Salesforce org credentials</li>
            <li>AWS/GCP/Azure service accounts</li>
          </ul>
        </li>
        <li><strong>Database</strong>
          <ul>
            <li>PostgreSQL 13+ or managed service (RDS, Cloud SQL, Azure Database)</li>
            <li>Initial user account with CREATE DATABASE permissions</li>
          </ul>
        </li>
        <li><strong>Email Delivery</strong> (optional)
          <ul>
            <li>SMTP server credentials (or use AWS SES, SendGrid, etc.)</li>
            <li>Domain verification for email agents</li>
          </ul>
        </li>
      </ol>

      <h2>Deployment Steps</h2>

      <h3>1. Prepare Your Environment</h3>

      <p>
        Create a deployment directory and clone the Headmaster configuration:
      </p>

      <pre><code className="language-bash">
mkdir -p /opt/headmaster
cd /opt/headmaster
git clone https://github.com/gcaplabs/headmaster-deploy.git
cd headmaster-deploy
      </code></pre>

      <h3>2. Configure Environment Variables</h3>

      <p>
        Create a <code>.env</code> file with your configuration:
      </p>

      <pre><code className="language-bash">
# Core Configuration
HEADMASTER_ENV=production
HEADMASTER_REGION=us-east-1
HEADMASTER_LOG_LEVEL=info

# LLM Configuration (choose primary model)
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx

# Database Configuration
DATABASE_URL=postgresql://headmaster:password@db.example.com:5432/headmaster
DATABASE_POOL_SIZE=20

# Storage Configuration
STORAGE_TYPE=s3
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE

# Security Configuration
JWT_SECRET=your-very-long-random-secret-key-here
ENCRYPTION_KEY=your-encryption-key-here

# Monitoring & Logging
DATADOG_API_KEY=xxxxxxxxxxxxx
      </code></pre>

      <h3>3. Database Setup</h3>

      <p>
        Create and initialize the database:
      </p>

      <pre><code className="language-bash">
# Create database and user
createdb -h db.example.com -U postgres headmaster

# Run migrations
npx headmaster db:migrate

# Create initial admin user
npx headmaster admin:create --email admin@example.com
      </code></pre>

      <h3>4. Deploy Using Docker</h3>

      <p>
        Build and run the Headmaster container:
      </p>

      <pre><code className="language-bash">
# Build image
docker build -t headmaster:latest .

# Run container
docker run -d \
  --name headmaster \
  --env-file .env \
  -p 8080:8080 \
  -v /opt/headmaster/data:/app/data \
  headmaster:latest

# Verify deployment
curl http://localhost:8080/health
      </code></pre>

      <h3>5. Deploy on Kubernetes</h3>

      <p>
        Use the provided Helm chart:
      </p>

      <pre><code className="language-bash">
# Add Headmaster Helm repository
helm repo add headmaster https://charts.gcaplabs.com
helm repo update

# Create namespace
kubectl create namespace headmaster

# Create secrets for sensitive data
kubectl create secret generic headmaster-api-keys \
  --from-literal=ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
  -n headmaster

# Deploy using Helm
helm install headmaster headmaster/headmaster \
  --namespace headmaster \
  --values values.yaml

# Verify deployment
kubectl get pods -n headmaster
      </code></pre>

      <h3>6. Configure Platform Integrations</h3>

      <h4>Slack Integration</h4>

      <p>
        Create a Slack app and configure:
      </p>

      <ol>
        <li>Go to https://api.slack.com/apps/new</li>
        <li>Select "From scratch"</li>
        <li>Copy Bot User OAuth Token</li>
        <li>Set SLACK_BOT_TOKEN environment variable</li>
        <li>Test connection: <code>npx headmaster slack:test-connection</code></li>
      </ol>

      <h4>Email Integration</h4>

      <p>
        For Gmail:
      </p>

      <ol>
        <li>Create service account in Google Cloud Console</li>
        <li>Download JSON key</li>
        <li>Share Google Group with service account email</li>
        <li>Test connection: <code>npx headmaster email:test-connection</code></li>
      </ol>

      <h3>7. Enable Monitoring & Logging</h3>

      <h4>Datadog</h4>

      <pre><code className="language-bash">
# Install Datadog agent
helm repo add datadog https://helm.datadoghq.com
helm install datadog datadog/datadog \
  --set datadog.apiKey=$DD_API_KEY \
  -n headmaster
      </code></pre>

      <h2>Post-Deployment Configuration</h2>

      <h3>1. Create Your First Agent</h3>

      <pre><code className="language-bash">
npx headmaster agent:create \
  --name "Customer Support Agent" \
  --model "claude-3-5-sonnet-20241022" \
  --platform slack \
  --workspace-id T12345678
      </code></pre>

      <h3>2. Configure Approval Gates</h3>

      <pre><code className="language-bash">
npx headmaster approval:configure \
  --agent-id agent_123 \
  --trigger financial_transaction \
  --threshold 5000 \
  --approver-group finance_team
      </code></pre>

      <h3>3. Set Up Monitoring Dashboards</h3>

      <ul>
        <li>Access web UI: https://headmaster.example.com</li>
        <li>Create dashboards for:
          <ul>
            <li>Agent activity and uptime</li>
            <li>Error rates and performance</li>
            <li>Model usage and costs</li>
            <li>Integration health</li>
          </ul>
        </li>
      </ul>

      <h3>4. Run Health Checks</h3>

      <pre><code className="language-bash">
# System health
npx headmaster health:check

# Database connectivity
npx headmaster db:check

# Integration status
npx headmaster integration:status
      </code></pre>

      <h2>Production Best Practices</h2>

      <h3>High Availability</h3>

      <ul>
        <li>Run at least 3 replicas for fault tolerance</li>
        <li>Use load balancer with health checks</li>
        <li>Database replication (primary/standby)</li>
        <li>Automated backups every 6 hours</li>
        <li>Cross-region failover capability</li>
      </ul>

      <h3>Scaling</h3>

      <ul>
        <li>Horizontal scaling: increase pod replicas</li>
        <li>Vertical scaling: increase resource requests/limits</li>
        <li>Cache layer (Redis) for frequently accessed data</li>
        <li>Database connection pooling</li>
        <li>Asynchronous job queue for long-running tasks</li>
      </ul>

      <h3>Security</h3>

      <ul>
        <li>Enable TLS for all communications</li>
        <li>Use secrets management (Vault, AWS Secrets Manager)</li>
        <li>Regular security updates and patches</li>
        <li>Network policies and firewall rules</li>
        <li>Audit logging for all operations</li>
      </ul>

      <h3>Disaster Recovery</h3>

      <ul>
        <li>Regular backup testing (monthly)</li>
        <li>Recovery time objective (RTO): 4 hours</li>
        <li>Recovery point objective (RPO): 1 hour</li>
        <li>Documented runbooks for common scenarios</li>
        <li>Disaster recovery drills quarterly</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Agent not responding</h3>

      <pre><code className="language-bash">
# Check agent status
npx headmaster agent:status --id agent_123

# View recent logs
npx headmaster logs:tail --agent-id agent_123 --lines 50

# Restart agent
npx headmaster agent:restart --id agent_123
      </code></pre>

      <h3>Database connection issues</h3>

      <pre><code className="language-bash">
# Test connection
npx headmaster db:test-connection

# Check migrations
npx headmaster db:status

# Run migrations
npx headmaster db:migrate
      </code></pre>

      <h3>Memory issues</h3>

      <pre><code className="language-bash">
# Check memory usage
npx headmaster memory:stats

# Archive old conversations
npx headmaster memory:archive --days 90
      </code></pre>

      <h2>Getting Help</h2>

      <ul>
        <li>Documentation: https://docs.gcaplabs.com</li>
        <li>Community: https://community.gcaplabs.com</li>
        <li>Support Email: support@gcaplabs.com</li>
        <li>Emergency Hotline: +1-415-555-0147</li>
        <li>Status Page: https://status.gcaplabs.com</li>
      </ul>
    </article>
  );
}
