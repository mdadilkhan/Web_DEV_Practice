Here’s a **comprehensive list of security-related questions** that developers are commonly asked during technical interviews. These are grouped by topic and security layer, covering **OWASP**, **web**, **API**, **server**, **database**, **code-level**, **deployment**, and **cloud security**.

---

## 🛡️ **1. OWASP Top 10–Based Questions**

| Question                                                   | What It's Testing                |
| ---------------------------------------------------------- | -------------------------------- |
| What is SQL Injection and how do you prevent it?           | Input validation & ORM knowledge |
| What is XSS (Cross-Site Scripting)? How can it be avoided? | Frontend sanitization awareness  |
| What is CSRF and how do you protect against it?            | Session/token handling knowledge |
| What is SSRF and how do you prevent it?                    | Server-side request control      |
| What is Broken Authentication?                             | Secure login/session management  |
| What is Security Misconfiguration?                         | Awareness of secure defaults     |
| What is Insecure Deserialization?                          | Data parsing practices           |
| What is Sensitive Data Exposure?                           | HTTPS, encryption best practices |

---

## 🌐 **2. Web Application Security**

| Question                                        | Checks If You Know                 |
| ----------------------------------------------- | ---------------------------------- |
| How do you secure forms from bot submissions?   | CAPTCHA, CSRF tokens               |
| How do you store and verify passwords securely? | Hashing, salting, bcrypt/argon2    |
| How do you prevent file upload vulnerabilities? | MIME checks, virus scan, file type |
| How do you handle secure headers in HTTP?       | Helmet (Node.js), CSP, HSTS        |
| What’s the difference between JWT and sessions? | Auth mechanism understanding       |
| Can CORS prevent all security issues?           | Deep understanding of CORS limits  |

---

## 🔒 **3. API Security**

| Question                                               | What's Evaluated             |
| ------------------------------------------------------ | ---------------------------- |
| How do you secure a public REST API?                   | Authentication/Authorization |
| What are rate limiting and throttling?                 | DDoS/API abuse protection    |
| How do you implement role-based access control (RBAC)? | Access logic in backend      |
| How do you verify an incoming JWT token?               | Token validation methods     |
| Can APIs be vulnerable to injection attacks?           | API-layer input filtering    |

---

## 🧠 **4. Authentication & Authorization**

| Question                                             | Assesses Knowledge of             |
| ---------------------------------------------------- | --------------------------------- |
| Difference between Authentication and Authorization? | Concept clarity                   |
| How do you securely implement login functionality?   | Secure password storage & session |
| How would you prevent brute-force login attacks?     | Rate limit, CAPTCHA, lockout      |
| How do refresh tokens work in OAuth2 or JWT?         | Secure token lifecycle management |

---

## 🧱 **5. Server & Deployment Security**

| Question                                          | Checks                               |
| ------------------------------------------------- | ------------------------------------ |
| How do you secure an Express.js/Node.js server?   | Middleware, sanitization, HTTPS      |
| How do you manage environment variables securely? | .env, secrets management             |
| What is CORS and how do you configure it?         | Frontend-backend security            |
| How would you defend against DDoS?                | CDN, WAF, rate-limiting, autoscaling |
| How to secure an NGINX/Apache reverse proxy?      | Header forwarding, HTTPS config      |

---

## 🔍 **6. Code-Level Security**

| Question                                    | Focus                                 |
| ------------------------------------------- | ------------------------------------- |
| Why is using `eval()` dangerous?            | Code injection risks                  |
| What is prototype pollution?                | JavaScript object handling            |
| How can insecure dependencies be exploited? | Awareness of dependency attacks       |
| How do you avoid XXE in XML parsers?        | Disabling DTD/external entity parsing |

---

## 🧮 **7. Database Security**

| Question                                        | Assesses                           |
| ----------------------------------------------- | ---------------------------------- |
| How do you protect against SQL Injection?       | Prepared statements/ORM            |
| How to restrict DB access to the app only?      | Principle of least privilege       |
| What is NoSQL Injection? How do you prevent it? | Input sanitation for NoSQL queries |

---

## 🧊 **8. Infrastructure/Cloud Security**

| Question                                       | Testing Knowledge Of               |
| ---------------------------------------------- | ---------------------------------- |
| What’s IAM? How do you apply least privilege?  | Cloud roles/policies               |
| How do you protect cloud secrets or API keys?  | Secrets manager/ENV best practices |
| What’s the risk of exposing S3 buckets or GCS? | Data leakage & public access risks |
| How do you protect against SSRF in cloud apps? | Metadata service protection        |

---

## 🧰 **9. Tools and Practices**

| Question                                                 | Relevance                       |
| -------------------------------------------------------- | ------------------------------- |
| What tools do you use to detect vulnerabilities?         | SAST, DAST, dependency scanners |
| How do you perform security testing?                     | BurpSuite, OWASP ZAP, Postman   |
| What is the purpose of a Web Application Firewall (WAF)? | Layer 7 defense knowledge       |
| How do you audit your code for security issues?          | Code reviews, linters, scanners |

---

### ✅ Bonus: Scenario-based Questions

* **“You’re asked to build a login system — what steps would you take to secure it?”**
* **“You found a user can upload arbitrary files. What’s your next step?”**
* **“You’re receiving traffic from an unknown bot. How do you mitigate this?”**

---

### Want Answers?

Let me know if you’d like **sample answers** for each, or a **PDF cheat-sheet** to study from.
