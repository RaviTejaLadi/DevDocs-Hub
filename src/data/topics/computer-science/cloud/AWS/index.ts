import type { TopicItem } from '@/data/topics';
import awsIntro from './intro.mdx?raw';
import awsAccountSetupAndBilling from './account-setup-and-billing.mdx?raw';
import awsCliAndConsole from './aws-cli-and-console.mdx?raw';
import awsGlobalInfrastructureRegionsAz from './global-infrastructure-regions-az.mdx?raw';
import awsEc2 from './ec2-elastic-compute-cloud.mdx?raw';
import awsLambda from './lambda-serverless.mdx?raw';
import awsEcsEks from './ecs-eks-containers.mdx?raw';
import awsElasticBeanstalk from './elastic-beanstalk.mdx?raw';
import awsAutoScaling from './auto-scaling.mdx?raw';
import awsS3 from './s3-simple-storage-service.mdx?raw';
import awsEbs from './ebs-elastic-block-store.mdx?raw';
import awsEfs from './efs-elastic-file-system.mdx?raw';
import awsGlacierAndBackup from './glacier-and-backup.mdx?raw';
import awsRds from './rds-relational-database-service.mdx?raw';
import awsDynamodb from './dynamodb.mdx?raw';
import awsAurora from './aurora.mdx?raw';
import awsElasticacheRedis from './elasticache-redis.mdx?raw';
import awsVpc from './vpc-virtual-private-cloud.mdx?raw';
import awsRoute53 from './route53-dns.mdx?raw';
import awsCloudfront from './cloudfront-cdn.mdx?raw';
import awsApiGateway from './api-gateway.mdx?raw';
import awsLoadBalancers from './load-balancers-alb-nlb.mdx?raw';
import awsDirectConnectAndVpn from './direct-connect-and-vpn.mdx?raw';
import awsIam from './iam-identity-access-management.mdx?raw';
import awsCognito from './cognito.mdx?raw';
import awsKms from './kms-key-management.mdx?raw';
import awsSecretsManager from './secrets-manager.mdx?raw';
import awsWafAndShield from './waf-and-shield.mdx?raw';
import awsCloudtrail from './cloudtrail.mdx?raw';
import awsCloudformation from './cloudformation.mdx?raw';
import awsCdk from './cdk-cloud-development-kit.mdx?raw';
import awsCodepipelineCodedeploy from './codepipeline-codedeploy.mdx?raw';
import awsCloudwatch from './cloudwatch-monitoring.mdx?raw';
import awsXRay from './x-ray.mdx?raw';
import awsSqs from './sqs-simple-queue-service.mdx?raw';
import awsSns from './sns-simple-notification-service.mdx?raw';
import awsEventbridge from './eventbridge.mdx?raw';
import awsKinesis from './kinesis.mdx?raw';
import awsWellArchitectedFramework from './well-architected-framework.mdx?raw';
import awsHighAvailabilityDisasterRecovery from './high-availability-disaster-recovery.mdx?raw';
import awsCostOptimization from './cost-optimization.mdx?raw';
import awsServerlessArchitecture from './serverless-architecture.mdx?raw';
import awsTheoryQuestions from './theory-questions.mdx?raw';
import awsCodingQuestions from './coding-questions.mdx?raw';
import awsTop25InterviewQuestions from './top-25-interview-questions.mdx?raw';

export const awsTopics: TopicItem[] = [
  {
    id: 'aws-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'aws-intro', title: '📚 Introduction', content: awsIntro },
      { id: 'aws-account-setup-and-billing', title: '💳 Account Setup & Billing', content: awsAccountSetupAndBilling },
      { id: 'aws-cli-and-console', title: '🖥️ AWS CLI & Console', content: awsCliAndConsole },
      {
        id: 'aws-global-infrastructure-regions-az',
        title: '🌍 Global Infrastructure (Regions & AZ)',
        content: awsGlobalInfrastructureRegionsAz,
      },
    ],
  },
  {
    id: 'aws-compute',
    title: '💻 Compute',
    content: '',
    items: [
      { id: 'aws-ec2', title: '🖥️ EC2 (Elastic Compute Cloud)', content: awsEc2 },
      { id: 'aws-lambda', title: '⚡ Lambda (Serverless)', content: awsLambda },
      { id: 'aws-ecs-eks', title: '🐳 ECS & EKS (Containers)', content: awsEcsEks },
      { id: 'aws-elastic-beanstalk', title: '🌱 Elastic Beanstalk', content: awsElasticBeanstalk },
      { id: 'aws-auto-scaling', title: '📈 Auto Scaling', content: awsAutoScaling },
    ],
  },
  {
    id: 'aws-storage',
    title: '📦 Storage',
    content: '',
    items: [
      { id: 'aws-s3', title: '🪣 S3 (Simple Storage Service)', content: awsS3 },
      { id: 'aws-ebs', title: '💾 EBS (Elastic Block Store)', content: awsEbs },
      { id: 'aws-efs', title: '📂 EFS (Elastic File System)', content: awsEfs },
      { id: 'aws-glacier-and-backup', title: '🧊 Glacier & Backup', content: awsGlacierAndBackup },
    ],
  },
  {
    id: 'aws-databases',
    title: '🗄️ Databases',
    content: '',
    items: [
      { id: 'aws-rds', title: '🐬 RDS (Relational Database Service)', content: awsRds },
      { id: 'aws-dynamodb', title: '⚡ DynamoDB', content: awsDynamodb },
      { id: 'aws-aurora', title: '🌟 Aurora', content: awsAurora },
      { id: 'aws-elasticache-redis', title: '🔴 ElastiCache (Redis)', content: awsElasticacheRedis },
    ],
  },
  {
    id: 'aws-networking',
    title: '🌐 Networking',
    content: '',
    items: [
      { id: 'aws-vpc', title: '🔒 VPC (Virtual Private Cloud)', content: awsVpc },
      { id: 'aws-route53', title: '📡 Route 53 (DNS)', content: awsRoute53 },
      { id: 'aws-cloudfront', title: '🚀 CloudFront (CDN)', content: awsCloudfront },
      { id: 'aws-api-gateway', title: '🚪 API Gateway', content: awsApiGateway },
      { id: 'aws-load-balancers', title: '⚖️ Load Balancers (ALB & NLB)', content: awsLoadBalancers },
      { id: 'aws-direct-connect-and-vpn', title: '🔗 Direct Connect & VPN', content: awsDirectConnectAndVpn },
    ],
  },
  {
    id: 'aws-security',
    title: '🔐 Security & Identity',
    content: '',
    items: [
      { id: 'aws-iam', title: '👤 IAM (Identity & Access Management)', content: awsIam },
      { id: 'aws-cognito', title: '🔑 Cognito', content: awsCognito },
      { id: 'aws-kms', title: '🗝️ KMS (Key Management)', content: awsKms },
      { id: 'aws-secrets-manager', title: '🤐 Secrets Manager', content: awsSecretsManager },
      { id: 'aws-waf-and-shield', title: '🛡️ WAF & Shield', content: awsWafAndShield },
      { id: 'aws-cloudtrail', title: '📋 CloudTrail', content: awsCloudtrail },
    ],
  },
  {
    id: 'aws-devops',
    title: '🛠️ DevOps & IaC',
    content: '',
    items: [
      { id: 'aws-cloudformation', title: '📐 CloudFormation', content: awsCloudformation },
      { id: 'aws-cdk', title: '🧱 CDK (Cloud Development Kit)', content: awsCdk },
      { id: 'aws-codepipeline-codedeploy', title: '🔄 CodePipeline & CodeDeploy', content: awsCodepipelineCodedeploy },
      { id: 'aws-cloudwatch', title: '📊 CloudWatch (Monitoring)', content: awsCloudwatch },
      { id: 'aws-x-ray', title: '🔍 X-Ray', content: awsXRay },
    ],
  },
  {
    id: 'aws-messaging',
    title: '📨 Messaging & Integration',
    content: '',
    items: [
      { id: 'aws-sqs', title: '📬 SQS (Simple Queue Service)', content: awsSqs },
      { id: 'aws-sns', title: '📢 SNS (Simple Notification Service)', content: awsSns },
      { id: 'aws-eventbridge', title: '🌉 EventBridge', content: awsEventbridge },
      { id: 'aws-kinesis', title: '🌊 Kinesis', content: awsKinesis },
    ],
  },
  {
    id: 'aws-architecture',
    title: '🏗️ Architecture & Best Practices',
    content: '',
    items: [
      {
        id: 'aws-well-architected-framework',
        title: '✅ Well-Architected Framework',
        content: awsWellArchitectedFramework,
      },
      {
        id: 'aws-high-availability-disaster-recovery',
        title: '🔄 High Availability & Disaster Recovery',
        content: awsHighAvailabilityDisasterRecovery,
      },
      { id: 'aws-cost-optimization', title: '💰 Cost Optimization', content: awsCostOptimization },
      { id: 'aws-serverless-architecture', title: '☁️ Serverless Architecture', content: awsServerlessArchitecture },
    ],
  },
  {
    id: 'aws-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'aws-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: awsTop25InterviewQuestions,
      },
      { id: 'aws-theory-questions', title: '❓ Theory Questions', content: awsTheoryQuestions },
      { id: 'aws-coding-questions', title: '💻 Coding Questions', content: awsCodingQuestions },
    ],
  },
];
