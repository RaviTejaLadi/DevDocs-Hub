import type { TopicItem } from '@/data/topics';
import firewalls from './firewalls.mdx?raw';
import ids_ips from './ids-ips.mdx?raw';
import introduction from './introduction.mdx?raw';
import vpn from './vpn.mdx?raw';
import wireless_security from './wireless-security.mdx?raw';

export const networkSecurityTopics: TopicItem[] = [
  { id: 'network-security-firewalls', title: 'Firewalls', content: firewalls },
  { id: 'network-security-ids-ips', title: 'IDS & IPS', content: ids_ips },
  { id: 'network-security-introduction', title: '📖 Introduction', content: introduction },
  { id: 'network-security-vpn', title: 'Vpn', content: vpn },
  { id: 'network-security-wireless-security', title: 'Wireless Security', content: wireless_security },
];
