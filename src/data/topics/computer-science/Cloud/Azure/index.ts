import type { TopicItem } from '@/data/topics';
import azureIntro from './intro.md?raw';
import azureAccountSetupAndBilling from './account-setup-and-billing.md?raw';
import azureCliAndPortal from './azure-cli-and-portal.md?raw';
import azureRegionsAndResourceGroups from './regions-and-resource-groups.md?raw';
import azureVirtualMachines from './virtual-machines.md?raw';
import azureAppService from './app-service.md?raw';
import azureFunctions from './azure-functions.md?raw';
import azureAks from './aks-kubernetes.md?raw';
import azureContainerInstances from './container-instances.md?raw';
import azureBlobStorage from './blob-storage.md?raw';
import azureFiles from './azure-files.md?raw';
import azureDiskStorage from './disk-storage.md?raw';
import azureArchiveStorage from './archive-storage.md?raw';
import azureSqlDatabase from './azure-sql-database.md?raw';
import azureCosmosDb from './cosmos-db.md?raw';
import azurePostgresqlMysqlFlexible from './postgresql-mysql-flexible.md?raw';
import azureRedisCache from './redis-cache.md?raw';
import azureVirtualNetwork from './virtual-network.md?raw';
import azureLoadBalancer from './load-balancer.md?raw';
import azureApplicationGateway from './application-gateway.md?raw';
import azureDns from './azure-dns.md?raw';
import azureCdn from './azure-cdn.md?raw';
import azureApiManagement from './api-management.md?raw';
import azureVpnAndExpressroute from './vpn-and-expressroute.md?raw';
import azureAdEntraId from './azure-ad-entra-id.md?raw';
import azureKeyVault from './key-vault.md?raw';
import azureMicrosoftDefender from './microsoft-defender.md?raw';
import azureRbac from './rbac-role-based-access.md?raw';
import azureManagedIdentities from './managed-identities.md?raw';
import azureArmTemplates from './arm-templates.md?raw';
import azureBicep from './bicep.md?raw';
import azureDevops from './azure-devops.md?raw';
import azureMonitorAndApplicationInsights from './monitor-and-application-insights.md?raw';
import azureServiceBus from './service-bus.md?raw';
import azureEventGrid from './event-grid.md?raw';
import azureEventHubs from './event-hubs.md?raw';
import azureLogicApps from './logic-apps.md?raw';
import azureWellArchitectedFramework from './well-architected-framework.md?raw';
import azureHighAvailabilityDisasterRecovery from './high-availability-disaster-recovery.md?raw';
import azureCostManagement from './cost-management.md?raw';
import azureHybridCloudAndArc from './hybrid-cloud-and-arc.md?raw';
import azureTheoryQuestions from './theory-questions.md?raw';
import azureCodingQuestions from './coding-questions.md?raw';
import azureTop25InterviewQuestions from './top-25-interview-questions.md?raw';

export const azureTopics: TopicItem[] = [
  {
    id: 'azure-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'azure-intro', title: '📚 Introduction', content: azureIntro },
      { id: 'azure-account-setup-and-billing', title: '💳 Account Setup & Billing', content: azureAccountSetupAndBilling },
      { id: 'azure-cli-and-portal', title: '🖥️ Azure CLI & Portal', content: azureCliAndPortal },
      { id: 'azure-regions-and-resource-groups', title: '🌍 Regions & Resource Groups', content: azureRegionsAndResourceGroups },
    ],
  },
  {
    id: 'azure-compute',
    title: '💻 Compute',
    content: '',
    items: [
      { id: 'azure-virtual-machines', title: '🖥️ Virtual Machines', content: azureVirtualMachines },
      { id: 'azure-app-service', title: '🌐 App Service', content: azureAppService },
      { id: 'azure-functions', title: '⚡ Azure Functions', content: azureFunctions },
      { id: 'azure-aks', title: '🐳 AKS (Kubernetes)', content: azureAks },
      { id: 'azure-container-instances', title: '📦 Container Instances', content: azureContainerInstances },
    ],
  },
  {
    id: 'azure-storage',
    title: '📦 Storage',
    content: '',
    items: [
      { id: 'azure-blob-storage', title: '🪣 Blob Storage', content: azureBlobStorage },
      { id: 'azure-files', title: '📂 Azure Files', content: azureFiles },
      { id: 'azure-disk-storage', title: '💾 Disk Storage', content: azureDiskStorage },
      { id: 'azure-archive-storage', title: '🧊 Archive Storage', content: azureArchiveStorage },
    ],
  },
  {
    id: 'azure-databases',
    title: '🗄️ Databases',
    content: '',
    items: [
      { id: 'azure-sql-database', title: '🐬 Azure SQL Database', content: azureSqlDatabase },
      { id: 'azure-cosmos-db', title: '🌌 Cosmos DB', content: azureCosmosDb },
      {
        id: 'azure-postgresql-mysql-flexible',
        title: '🐘 PostgreSQL & MySQL Flexible Server',
        content: azurePostgresqlMysqlFlexible,
      },
      { id: 'azure-redis-cache', title: '🔴 Redis Cache', content: azureRedisCache },
    ],
  },
  {
    id: 'azure-networking',
    title: '🌐 Networking',
    content: '',
    items: [
      { id: 'azure-virtual-network', title: '🔒 Virtual Network', content: azureVirtualNetwork },
      { id: 'azure-load-balancer', title: '⚖️ Load Balancer', content: azureLoadBalancer },
      { id: 'azure-application-gateway', title: '🚪 Application Gateway', content: azureApplicationGateway },
      { id: 'azure-dns', title: '📡 Azure DNS', content: azureDns },
      { id: 'azure-cdn', title: '🚀 Azure CDN', content: azureCdn },
      { id: 'azure-api-management', title: '🔌 API Management', content: azureApiManagement },
      { id: 'azure-vpn-and-expressroute', title: '🔗 VPN & ExpressRoute', content: azureVpnAndExpressroute },
    ],
  },
  {
    id: 'azure-security',
    title: '🔐 Security & Identity',
    content: '',
    items: [
      { id: 'azure-ad-entra-id', title: '👤 Azure AD / Entra ID', content: azureAdEntraId },
      { id: 'azure-key-vault', title: '🗝️ Key Vault', content: azureKeyVault },
      { id: 'azure-microsoft-defender', title: '🛡️ Microsoft Defender', content: azureMicrosoftDefender },
      { id: 'azure-rbac', title: '👮 RBAC (Role-Based Access)', content: azureRbac },
      { id: 'azure-managed-identities', title: '🪪 Managed Identities', content: azureManagedIdentities },
    ],
  },
  {
    id: 'azure-devops',
    title: '🛠️ DevOps & IaC',
    content: '',
    items: [
      { id: 'azure-arm-templates', title: '📐 ARM Templates', content: azureArmTemplates },
      { id: 'azure-bicep', title: '🧱 Bicep', content: azureBicep },
      { id: 'azure-devops', title: '🔄 Azure DevOps', content: azureDevops },
      {
        id: 'azure-monitor-and-application-insights',
        title: '📊 Monitor & Application Insights',
        content: azureMonitorAndApplicationInsights,
      },
    ],
  },
  {
    id: 'azure-messaging',
    title: '📨 Messaging & Integration',
    content: '',
    items: [
      { id: 'azure-service-bus', title: '📬 Service Bus', content: azureServiceBus },
      { id: 'azure-event-grid', title: '🌉 Event Grid', content: azureEventGrid },
      { id: 'azure-event-hubs', title: '🌊 Event Hubs', content: azureEventHubs },
      { id: 'azure-logic-apps', title: '🔧 Logic Apps', content: azureLogicApps },
    ],
  },
  {
    id: 'azure-architecture',
    title: '🏗️ Architecture & Best Practices',
    content: '',
    items: [
      {
        id: 'azure-well-architected-framework',
        title: '✅ Well-Architected Framework',
        content: azureWellArchitectedFramework,
      },
      {
        id: 'azure-high-availability-disaster-recovery',
        title: '🔄 High Availability & Disaster Recovery',
        content: azureHighAvailabilityDisasterRecovery,
      },
      { id: 'azure-cost-management', title: '💰 Cost Management', content: azureCostManagement },
      { id: 'azure-hybrid-cloud-and-arc', title: '☁️ Hybrid Cloud & Azure Arc', content: azureHybridCloudAndArc },
    ],
  },
  {
    id: 'azure-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'azure-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: azureTop25InterviewQuestions,
      },
      { id: 'azure-theory-questions', title: '❓ Theory Questions', content: azureTheoryQuestions },
      { id: 'azure-coding-questions', title: '💻 Coding Questions', content: azureCodingQuestions },
    ],
  },
];
