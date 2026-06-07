export const metadata = {
  title: "Security & Compliance - Documentation",
  description: "Security features, compliance certifications, and data handling practices",
};

export default function SecurityPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>Security & Compliance</h1>

      <p>
        Headmaster is built with enterprise-grade security from the ground up. We implement defense-in-depth across all layers of the platform.
      </p>

      <h2>Security Architecture</h2>

      <h3>Encryption</h3>

      <h4>In Transit</h4>
      <ul>
        <li>All communication uses TLS 1.3</li>
        <li>Certificate pinning for critical endpoints</li>
        <li>Perfect forward secrecy for all sessions</li>
        <li>Mutual TLS for service-to-service communication</li>
      </ul>

      <h4>At Rest</h4>
      <ul>
        <li>AES-256 encryption for all data</li>
        <li>Separate encryption keys per customer</li>
        <li>Hardware security modules (HSMs) for key storage</li>
        <li>Regular key rotation (90-day schedule)</li>
      </ul>

      <h4>Sensitive Data</h4>
      <ul>
        <li>API keys and credentials encrypted with envelope encryption</li>
        <li>PII masked in logs and audit trails</li>
        <li>Password hashing with PBKDF2 and salt</li>
        <li>Memory/conversation data encrypted with customer-specific keys</li>
      </ul>

      <h3>Access Control</h3>

      <h4>Authentication</h4>
      <ul>
        <li>OAuth 2.0 and SAML 2.0 support</li>
        <li>Multi-factor authentication (MFA) required for admin access</li>
        <li>Session timeouts: 24 hours for web, 30 days for API</li>
        <li>Impossible travel detection</li>
      </ul>

      <h4>Authorization</h4>
      <ul>
        <li>Role-based access control (RBAC)</li>
        <li>Team-based isolation of agents and data</li>
        <li>Principle of least privilege</li>
        <li>Audit logging for all permission changes</li>
      </ul>

      <h4>API Security</h4>
      <ul>
        <li>API key rotation required every 90 days</li>
        <li>Rate limiting: 1000 req/min per key</li>
        <li>IP whitelisting available</li>
        <li>Webhook signature validation</li>
      </ul>

      <h3>Network Security</h3>

      <ul>
        <li>DDoS protection with Cloudflare</li>
        <li>VPC isolation for dedicated deployments</li>
        <li>VPN/private link support</li>
        <li>Egress IP whitelisting</li>
      </ul>

      <h3>Application Security</h3>

      <h4>Code Security</h4>
      <ul>
        <li>SAST scanning on every commit</li>
        <li>Dependency vulnerability scanning</li>
        <li>Regular penetration testing</li>
        <li>Bug bounty program ($500-$25,000 rewards)</li>
      </ul>

      <h4>Data Validation</h4>
      <ul>
        <li>Input validation on all endpoints</li>
        <li>SQL injection prevention</li>
        <li>XSS protection</li>
        <li>CSRF tokens on state-changing operations</li>
      </ul>

      <h4>Error Handling</h4>
      <ul>
        <li>Generic error messages to users</li>
        <li>Detailed errors logged for debugging</li>
        <li>No sensitive data in error responses</li>
        <li>Stack traces hidden in production</li>
      </ul>

      <h2>Compliance Certifications</h2>

      <h3>SOC 2 Type II</h3>

      <ul>
        <li><strong>Scope</strong>: Organization's control environment</li>
        <li><strong>Audit Period</strong>: 12 months</li>
        <li><strong>Trust Principles</strong>: Security, Availability, Processing Integrity, Confidentiality, Privacy</li>
        <li><strong>Status</strong>: Current, expires December 2025</li>
        <li><strong>Auditor</strong>: CliftonLarsonAllen LLP</li>
      </ul>

      <h3>GDPR Compliance</h3>

      <ul>
        <li><strong>Data Controller</strong>: GCAP Labs (for processing)</li>
        <li><strong>Data Processor</strong>: Your organization (for stored data)</li>
        <li><strong>Rights</strong>: Full data subject access, portability, deletion</li>
        <li><strong>Transfers</strong>: Standard Contractual Clauses (SCCs) for EU transfers</li>
        <li><strong>DPA</strong>: Data Processing Agreement included</li>
      </ul>

      <h3>HIPAA Compliance</h3>

      <ul>
        <li><strong>Business Associate Agreement</strong>: Available for healthcare organizations</li>
        <li><strong>Encryption</strong>: NIST-approved algorithms for PHI</li>
        <li><strong>Audit Controls</strong>: Logging of all PHI access</li>
        <li><strong>Access Controls</strong>: Role-based access to health information</li>
        <li><strong>Integrity</strong>: Data integrity verification and checksums</li>
      </ul>

      <h3>CCPA & State Privacy Laws</h3>

      <ul>
        <li><strong>Consumer Rights</strong>: Access, deletion, data portability, opt-out</li>
        <li><strong>Do Not Sell</strong>: Personal information never sold or shared</li>
        <li><strong>Privacy Policy</strong>: Clear disclosure of data practices</li>
        <li><strong>Right to Delete</strong>: Automated deletion of personal data</li>
        <li><strong>Breach Notification</strong>: 30-day breach notification requirement</li>
      </ul>

      <h3>ISO/IEC 27001</h3>

      <ul>
        <li><strong>Status</strong>: Certified</li>
        <li><strong>Scope</strong>: Information security management system</li>
        <li><strong>Auditor</strong>: Bureau Veritas</li>
        <li><strong>Focus</strong>: Confidentiality, integrity, availability</li>
      </ul>

      <h3>Other Standards</h3>

      <ul>
        <li><strong>PCI DSS</strong>: Not applicable (we don't process credit cards)</li>
        <li><strong>FedRAMP</strong>: Authorized for US federal government use</li>
        <li><strong>C5</strong>: German security certification for cloud services</li>
        <li><strong>IRAP</strong>: Australian Information Security Registered Assessors Program</li>
      </ul>

      <h2>Data Handling Practices</h2>

      <h3>Data Retention</h3>

      <h4>Active Data (while customer uses Headmaster)</h4>
      <ul>
        <li>Conversation logs and memory: retained indefinitely or per customer policy</li>
        <li>System logs: 90 days</li>
        <li>Audit logs: 2 years</li>
        <li>Backups: 30-day rolling window</li>
      </ul>

      <h4>Deleted Data (after customer deletes organization)</h4>
      <ul>
        <li>Immediate deletion from operational systems</li>
        <li>Removed from backups within 30 days</li>
        <li>Cryptographic erasure certificate provided</li>
        <li>No manual recovery possible</li>
      </ul>

      <h3>Data Residency</h3>

      <p>
        Select where your data is stored:
      </p>
      <ul>
        <li><strong>US</strong>: AWS us-east-1 (N. Virginia)</li>
        <li><strong>EU</strong>: AWS eu-west-1 (Ireland)</li>
        <li><strong>Asia-Pacific</strong>: AWS ap-southeast-1 (Singapore)</li>
        <li><strong>Custom</strong>: Private cloud deployments available</li>
      </ul>

      <h3>Data Ownership</h3>

      <ul>
        <li><strong>Your Data</strong>: You own all agent configurations, conversations, and memory</li>
        <li><strong>Our Systems</strong>: We retain service logs and anonymized usage metrics</li>
        <li><strong>Third Parties</strong>: Never shared without explicit consent</li>
        <li><strong>Subprocessors</strong>: Published at gcap.online/subprocessors</li>
      </ul>

      <h2>Operational Security</h2>

      <h3>Infrastructure</h3>

      <h4>Deployment</h4>
      <ul>
        <li>Infrastructure as Code (IaC) for reproducibility</li>
        <li>Blue-green deployments for zero downtime</li>
        <li>Canary releases for gradual rollouts</li>
        <li>Rollback capability for all updates</li>
      </ul>

      <h4>Monitoring</h4>
      <ul>
        <li>24/7 security operations center</li>
        <li>Real-time threat detection</li>
        <li>Automated incident response</li>
        <li>Monthly security reviews</li>
      </ul>

      <h4>Incident Response</h4>
      <ul>
        <li>Documented incident response procedures</li>
        <li>24/7 incident hotline: +1-415-555-0147</li>
        <li>Maximum response time: 1 hour for critical issues</li>
        <li>Post-incident reviews with customers</li>
      </ul>

      <h3>Staff Security</h3>

      <h4>Employee Access</h4>
      <ul>
        <li>Background checks for all employees</li>
        <li>Least privilege principle for system access</li>
        <li>Mandatory security training (annual)</li>
        <li>NDAs and security agreements required</li>
      </ul>

      <h4>Access Logging</h4>
      <ul>
        <li>All privileged access logged</li>
        <li>Access reviews quarterly</li>
        <li>Exceptions require approval</li>
        <li>Audit trail immutable</li>
      </ul>

      <h2>Vulnerability Management</h2>

      <h3>Scanning</h3>

      <ul>
        <li>Weekly vulnerability scans</li>
        <li>Continuous SAST scanning</li>
        <li>Dependency vulnerability detection</li>
        <li>Regular penetration testing</li>
      </ul>

      <h3>Patching</h3>

      <ul>
        <li>Critical patches: deployed within 24 hours</li>
        <li>High severity: within 7 days</li>
        <li>Medium/Low: within 30 days</li>
        <li>Emergency patches as needed</li>
      </ul>

      <h3>Disclosure</h3>

      <ul>
        <li>Responsible vulnerability disclosure policy</li>
        <li>Bug bounty program for external researchers</li>
        <li>Security advisories published for CVEs</li>
        <li>CVSS score assessment for all vulnerabilities</li>
      </ul>

      <h2>Compliance Support</h2>

      <h3>Documentation</h3>

      <ul>
        <li>Data Processing Agreements (DPA)</li>
        <li>Business Associate Agreements (BAA) for HIPAA</li>
        <li>Security attestations and SOC 2 reports</li>
        <li>Compliance questionnaires</li>
      </ul>

      <h3>Audits</h3>

      <ul>
        <li>Right to audit included in contracts</li>
        <li>Customer-led audits supported</li>
        <li>Third-party audits accommodated</li>
        <li>Audit results provided within 30 days</li>
      </ul>

      <h3>Training</h3>

      <ul>
        <li>Security documentation and guides</li>
        <li>Implementation best practices</li>
        <li>Compliance workshop availability</li>
        <li>Ongoing support during audits</li>
      </ul>

      <h2>Reporting Security Issues</h2>

      <p>
        Found a security vulnerability? Please report it responsibly:
      </p>

      <ol>
        <li>Do not open public issues</li>
        <li>Email: security@gcaplabs.com</li>
        <li>PGP Key: Available here</li>
        <li>Include: vulnerability details, affected versions, proof of concept</li>
      </ol>

      <p>
        Response SLA: Initial response within 24 hours, updates every 7 days.
      </p>

      <h2>Additional Resources</h2>

      <ul>
        <li><a href="https://gcap.online/security-policy">Security Policy</a></li>
        <li><a href="https://gcap.online/incident-response">Incident Response Plan</a></li>
        <li><a href="https://gcap.online/subprocessors">Subprocessor List</a></li>
        <li><a href="https://gcap.online/bug-bounty">Bug Bounty Program</a></li>
      </ul>
    </article>
  );
}
