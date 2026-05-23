import type { TopicItem } from '@/data/topics';
import awsIntro from './intro.md?raw';
import awsAccountSetupAndBilling from './account-setup-and-billing.md?raw';
import awsCliAndConsole from './aws-cli-and-console.md?raw';
import awsGlobalInfrastructureRegionsAz from './global-infrastructure-regions-az.md?raw';
import awsEc2 from './ec2-elastic-compute-cloud.md?raw';
import awsLambda from './lambda-serverless.md?raw';
import awsEcsEks from './ecs-eks-containers.md?raw';
import awsElasticBeanstalk from './elastic-beanstalk.md?raw';
import awsAutoScaling from './auto-scaling.md?raw';
import awsS3 from './s3-simple-storage-service.md?raw';
import awsEbs from './ebs-elastic-block-store.md?raw';
import awsEfs from './efs-elastic-file-system.md?raw';
import awsGlacierAndBackup from './glacier-and-backup.md?raw';
import awsRds from './rds-relational-database-service.md?raw';
import awsDynamodb from './dynamodb.md?raw';
import awsAurora from './aurora.md?raw';
import awsElasticacheRedis from './elasticache-redis.md?raw';
import awsVpc from './vpc-virtual-private-cloud.md?raw';
import awsRoute53 from './route53-dns.md?raw';
import awsCloudfront from './cloudfront-cdn.md?raw';
import awsApiGateway from './api-gateway.md?raw';
import awsLoadBalancers from './load-balancers-alb-nlb.md?raw';
import awsDirectConnectAndVpn from './direct-connect-and-vpn.md?raw';
import awsIam from './iam-identity-access-management.md?raw';
import awsCognito from './cognito.md?raw';
import awsKms from './kms-key-management.md?raw';
import awsSecretsManager from './secrets-manager.md?raw';
import awsWafAndShield from './waf-and-shield.md?raw';
import awsCloudtrail from './cloudtrail.md?raw';
import awsCloudformation from './cloudformation.md?raw';
import awsCdk from './cdk-cloud-development-kit.md?raw';
import awsCodepipelineCodedeploy from './codepipeline-codedeploy.md?raw';
import awsCloudwatch from './cloudwatch-monitoring.md?raw';
import awsXRay from './x-ray.md?raw';
import awsSqs from './sqs-simple-queue-service.md?raw';
import awsSns from './sns-simple-notification-service.md?raw';
import awsEventbridge from './eventbridge.md?raw';
import awsKinesis from './kinesis.md?raw';
import awsWellArchitectedFramework from './well-architected-framework.md?raw';
import awsHighAvailabilityDisasterRecovery from './high-availability-disaster-recovery.md?raw';
import awsCostOptimization from './cost-optimization.md?raw';
import awsServerlessArchitecture from './serverless-architecture.md?raw';
import awsTheoryQuestions from './theory-questions.md?raw';
import awsCodingQuestions from './coding-questions.md?raw';
import awsTop25InterviewQuestions from './top-25-interview-questions.md?raw';

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
