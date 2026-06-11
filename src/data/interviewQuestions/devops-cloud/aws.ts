import type { InterviewQA } from '..';

export const awsQuestions: InterviewQA[] = [
  {
    id: 'aws-01',
    question: 'What is AWS (Amazon Web Services)?',
    answer:
      'AWS is a comprehensive, evolving cloud computing platform provided by Amazon. It provides a mix of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-02',
    question: 'Explain the concept of Regions and Availability Zones (AZs).',
    answer:
      '- **Region:** A physical location in the world where AWS has multiple Availability Zones. Regions are geographically isolated.\n- **Availability Zone (AZ):** One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs allow for high availability and fault tolerance.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-03',
    question: 'What is Amazon EC2?',
    answer:
      'Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS Cloud. It allows users to launch virtual servers (instances), manage security and networking, and manage storage.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-04',
    question: 'What is an Amazon Machine Image (AMI)?',
    answer:
      'An AMI provides the information required to launch an instance. It includes a template for the root volume (OS, application server, applications), launch permissions, and a block device mapping.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-05',
    question: 'Explain the different EC2 pricing models.',
    answer:
      '1.  **On-Demand:** Pay for capacity by the second or hour with no long-term commitment.\n2.  **Reserved Instances (RI):** Provide a significant discount compared to On-Demand by committing to a 1 or 3-year term.\n3.  **Savings Plans:** Flexible pricing model that offers low prices in exchange for a commitment to a consistent amount of usage.\n4.  **Spot Instances:** Allow you to request spare EC2 computing capacity for up to 90% off the On-Demand price. Can be interrupted by AWS.\n5.  **Dedicated Hosts:** Physical EC2 server dedicated for your use.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-06',
    question: 'What is Amazon S3?',
    answer:
      'Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. It is used to store and protect any amount of data for various use cases.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-07',
    question: 'What are S3 Storage Classes?',
    answer:
      '- **S3 Standard:** Frequent access.\n- **S3 Intelligent-Tiering:** Unknown or changing access patterns.\n- **S3 Standard-IA:** Infrequent access, but rapid access when needed.\n- **S3 One Zone-IA:** Infrequent access, stored in a single AZ (lower cost).\n- **S3 Glacier Instant Retrieval:** Archive data with millisecond retrieval.\n- **S3 Glacier Flexible Retrieval:** Archive data (minutes to hours retrieval).\n- **S3 Glacier Deep Archive:** Long-term archive (12-48 hours retrieval).',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-08',
    question: 'What is a VPC (Virtual Private Cloud)?',
    answer:
      'An Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of IP address range, creation of subnets, and configuration of route tables and network gateways.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-09',
    question: 'Explain the difference between a Public Subnet and a Private Subnet.',
    answer:
      '- **Public Subnet:** Has a route to an Internet Gateway (IGW), allowing resources within it to communicate with the internet directly.\n- **Private Subnet:** Does not have a direct route to an Internet Gateway. To access the internet, resources usually go through a NAT Gateway or NAT Instance located in a public subnet.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-10',
    question: 'What is an IAM (Identity and Access Management)?',
    answer:
      'IAM is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.',
    topicId: 'aws',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'aws-11',
    question: 'Explain the difference between IAM Users, Groups, and Roles.',
    answer:
      '- **IAM User:** An entity that you create in AWS to represent the person or service that uses it to interact with AWS.\n- **IAM Group:** A collection of IAM users. You can specify permissions for a group, which makes those permissions easier to manage for those users.\n- **IAM Role:** An IAM identity that you can create in your account that has specific permissions. Unlike a user, a role does not have credentials (password or access keys). It is intended to be assumable by anyone who needs it (users, applications, or AWS services).',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-12',
    question: 'What is the "Principle of Least Privilege"?',
    answer:
      'It is a security best practice of granting only the minimum permissions necessary for a user, role, or service to perform its intended task and nothing more.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-13',
    question: 'What is an AWS Lambda function?',
    answer:
      'AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You only pay for the compute time you consume.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-14',
    question: 'What is Amazon RDS?',
    answer:
      'Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It supports several database engines including MySQL, PostgreSQL, MariaDB, Oracle, and Microsoft SQL Server.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-15',
    question: 'What is Amazon DynamoDB?',
    answer:
      'DynamoDB is a fully managed, serverless, NoSQL key-value and document database designed to run high-performance applications at any scale. It offers built-in security, continuous backups, automated multi-Region replication, and in-memory caching.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-16',
    question: 'Explain the difference between a Security Group and a Network ACL (NACL).',
    answer:
      '- **Security Group:** Acts as a virtual firewall for your **instance** to control inbound and outbound traffic. State-full (if inbound is allowed, outbound is automatically allowed). Evaluates all rules.\n- **Network ACL:** Acts as a firewall for controlling traffic in and out of one or more **subnets**. State-less (inbound and outbound must be explicitly allowed). Evaluates rules in numbered order.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-17',
    question: 'What is Amazon Route 53?',
    answer:
      'Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to internet applications.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-18',
    question: 'What is AWS CloudFormation?',
    answer:
      'CloudFormation is a service that gives developers and businesses an easy way to create a collection of related AWS and third-party resources, and provision and manage them in an orderly and predictable fashion using Infrastructure as Code (IaC) templates (YAML or JSON).',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-19',
    question: 'What is Amazon CloudWatch?',
    answer:
      'CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. It provides data and actionable insights to monitor applications, respond to system-wide performance changes, and optimize resource utilization.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-20',
    question: 'Explain AWS Auto Scaling.',
    answer:
      'AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. It can automatically increase or decrease the number of EC2 instances in an Auto Scaling Group based on demand.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-21',
    question: 'What is an Elastic Load Balancer (ELB)? Mention the types.',
    answer:
      'ELB automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses. \n\n**Types:**\n1.  **Application Load Balancer (ALB):** Best for HTTP/HTTPS traffic (Layer 7).\n2.  **Network Load Balancer (NLB):** Best for TCP, UDP, and TLS traffic where extreme performance is required (Layer 4).\n3.  **Gateway Load Balancer (GWLB):** Best for deploying, scaling, and managing third-party virtual appliances.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-22',
    question: 'What is Amazon CloudFront?',
    answer:
      'CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-23',
    question: 'What is AWS CloudTrail?',
    answer:
      'CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records AWS API calls and events for your account and delivers log files to an S3 bucket.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-24',
    question: 'Explain the "Shared Responsibility Model".',
    answer:
      'AWS is responsible for "Security **of** the Cloud" (infrastructure, hardware, networking, facilities). The customer is responsible for "Security **in** the Cloud" (data, OS configuration, IAM, application code, encryption).',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-25',
    question: 'What is Amazon ElastiCache?',
    answer:
      'ElastiCache is a fully managed in-memory caching service supporting Memcached and Redis. It improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory caches, instead of relying entirely on slower disk-based databases.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-26',
    question: 'What is AWS KMS (Key Management Service)?',
    answer:
      'KMS is a managed service that makes it easy for you to create and control the cryptographic keys used to encrypt your data. It uses Hardware Security Modules (HSMs) to protect the security of your keys.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-27',
    question: 'What is an Internet Gateway (IGW)?',
    answer:
      'An IGW is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-28',
    question: 'What is a NAT Gateway?',
    answer:
      'A NAT Gateway is a Network Address Translation (NAT) service. You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC but external services cannot initiate a connection with those instances.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-29',
    question: 'What is Amazon SNS (Simple Notification Service)?',
    answer:
      'SNS is a fully managed pub/sub messaging service for both microservices-to-microservices and microservices-to-person communication. It allows you to send messages to a large number of subscriber endpoints, including SQS queues, Lambda functions, HTTP/S webhooks, and mobile push notifications.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-30',
    question: 'What is Amazon SQS (Simple Queue Service)?',
    answer:
      'SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It eliminates the complexity and overhead associated with managing and operating message-oriented middleware.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-31',
    question: 'Explain the difference between SQS Standard and SQS FIFO queues.',
    answer:
      '- **Standard Queues:** Unlimited throughput, at-least-once delivery, best-effort ordering.\n- **FIFO Queues:** Limited throughput (up to 3000 msg/s with batching), exactly-once processing, first-in-first-out (strict) ordering.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-32',
    question: 'What is AWS Direct Connect?',
    answer:
      'AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or colocation environment.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-33',
    question: 'What is a VPC Peering connection?',
    answer:
      'A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IP addresses. Instances in either VPC can communicate with each other as if they are within the same network.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-34',
    question: 'What is AWS Transit Gateway?',
    answer:
      'AWS Transit Gateway is a service that enables customers to connect their Amazon VPCs and their on-premises networks to a single gateway. It acts as a hub that controls how traffic is routed among all the connected networks which act like spokes.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-35',
    question: 'What is Amazon Aurora?',
    answer:
      'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases. It is up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-36',
    question: 'What is Amazon Athena?',
    answer:
      'Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-37',
    question: 'What is Amazon Redshift?',
    answer:
      'Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-38',
    question: 'Explain AWS Step Functions.',
    answer:
      'AWS Step Functions is a low-code visual workflow service used to orchestrate AWS services, automate business processes, and build serverless applications. Workflows are defined using the Amazon States Language (ASL).',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-39',
    question: 'What is the purpose of AWS Organizations?',
    answer:
      'AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. It allows you to programmatically create new AWS accounts, consolidate billing, and apply Service Control Policies (SCPs) to restrict actions across accounts.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-40',
    question: 'What are Service Control Policies (SCPs)?',
    answer:
      'SCPs are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization, ensuring that your accounts stay within your organization’s access control guidelines.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-41',
    question: 'Explain AWS Elastic Beanstalk.',
    answer:
      'Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-42',
    question: 'What is Amazon EKS?',
    answer:
      'Amazon Elastic Kubernetes Service (EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane or nodes.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-43',
    question: 'What is AWS Fargate?',
    answer:
      'AWS Fargate is a serverless, pay-as-you-go compute engine that lets you build applications without managing servers. Fargate works with both Amazon ECS and Amazon EKS.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-44',
    question: 'What is Amazon API Gateway?',
    answer:
      'Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-45',
    question: 'Explain the difference between Vertical Scaling and Horizontal Scaling in AWS.',
    answer:
      '- **Vertical Scaling (Scaling Up):** Increasing the capacity of a single resource (e.g., changing to a larger EC2 instance type with more CPU/RAM).\n- **Horizontal Scaling (Scaling Out):** Adding more resources of the same type (e.g., adding more EC2 instances to an Auto Scaling Group).',
    topicId: 'aws',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'aws-46',
    question: 'What is AWS Global Accelerator?',
    answer:
      "AWS Global Accelerator is a networking service that improves your users' performance by optimizing the path from your users to your applications, using the AWS global network infrastructure. It provides static IP addresses that act as a fixed entry point to your application endpoints.",
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-47',
    question: 'Explain AWS Secrets Manager vs Parameter Store (SSM).',
    answer:
      '- **SSM Parameter Store:** Good for general configuration data and secrets. Free for standard parameters. No automatic rotation.\n- **Secrets Manager:** Specifically designed for confidential information (passwords, API keys). Costs per secret. Supports automatic rotation of secrets (e.g., RDS passwords).',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-48',
    question: 'What is AWS X-Ray?',
    answer:
      'AWS X-Ray helps developers analyze and debug distributed applications, such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-49',
    question: 'What is AWS Glue?',
    answer:
      'AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it simple and cost-effective to categorize your data, clean it, enrich it, and move it reliably between various data stores and data streams.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-50',
    question: 'Explain "Cold Start" in AWS Lambda.',
    answer:
      'A cold start occurs when a Lambda function is invoked after not being used for some time, or when AWS needs to scale out. AWS must provision a new execution environment, which adds latency to the first request. It can be mitigated using "Provisioned Concurrency".',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-51',
    question: 'What is the AWS Well-Architected Framework?',
    answer:
      'A set of best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud. It is based on six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-52',
    question: 'What is a Gateway Endpoint and an Interface Endpoint (PrivateLink)?',
    answer:
      '- **Gateway Endpoint:** A gateway that you specify in your route table to access S3 or DynamoDB from your VPC without using an IGW or NAT Gateway.\n- **Interface Endpoint:** Uses AWS PrivateLink to connect you to services powered by PrivateLink. It uses a private IP address from your subnet.',
    topicId: 'aws',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'aws-53',
    question: 'Explain "Drift Detection" in CloudFormation.',
    answer:
      'Drift detection enables you to identify stack resources that have been modified outside of CloudFormation management (e.g., via the AWS Console or CLI). It helps you ensure that your actual infrastructure matches your template.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-54',
    question: 'What is Amazon Macie?',
    answer:
      'Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in Amazon S3.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-55',
    question: 'What is AWS Shield and AWS WAF?',
    answer:
      '- **AWS Shield:** A managed Distributed Denial of Service (DDoS) protection service. Standard is free; Advanced provides higher-level protection.\n- **AWS WAF:** A web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-56',
    question: 'How do you handle cross-account access in AWS?',
    answer:
      'By creating an IAM Role in the destination account that trusts the source account. A user in the source account then "assumes" that role using the `AssumeRole` API call to get temporary credentials for the destination account.',
    topicId: 'aws',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'aws-57',
    question: 'What is "Amazon S3 Transfer Acceleration"?',
    answer:
      'S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. It takes advantage of Amazon CloudFront’s globally distributed edge locations.',
    topicId: 'aws',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'aws-58',
    question: 'Explain the difference between EBS and EFS.',
    answer:
      '- **Amazon EBS (Elastic Block Store):** High-performance block storage designed for use with EC2. Usually attached to a single instance (unless Multi-Attach is used).\n- **Amazon EFS (Elastic File System):** Scalable, managed NFS file system for use with AWS Cloud services and on-premises resources. Can be mounted by many instances simultaneously.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'aws-59',
    question: 'What is AWS Outposts?',
    answer:
      'AWS Outposts is a fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to virtually any on-premises or edge location for a truly consistent hybrid experience.',
    topicId: 'aws',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'aws-60',
    question: 'What is "AWS CDK" (Cloud Development Kit)?',
    answer:
      'AWS CDK is an open-source software development framework to define your cloud application resources using familiar programming languages like TypeScript, Python, Java, and C#. It transpiles into CloudFormation templates.',
    topicId: 'aws',
    level: 'mid',
    questionType: 'theory',
  },
];
