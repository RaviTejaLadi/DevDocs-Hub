import type { Topic } from '@/data/topics';
import { Shield, Globe, Lock, KeyRound, Target } from 'lucide-react';
import { fundamentalsTopics } from './fundamentals';
import { networkSecurityTopics } from './network-security';
import { applicationSecurityTopics } from './application-security';
import { cryptographyTopics } from './cryptography';
import { ethicalHackingTopics } from './ethical-hacking';

const CATEGORY = 'cybersecurity';

export const cybersecurityTopics: Topic[] = [
  {
    id: 'cyber-fundamentals',
    title: 'Fundamentals',
    description: 'CIA triad, threats, policies, and risk management.',
    icon: <Shield className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: fundamentalsTopics,
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Firewalls, VPN, IDS/IPS, and wireless security.',
    icon: <Globe className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: networkSecurityTopics,
  },
  {
    id: 'application-security',
    title: 'Application Security',
    description: 'OWASP Top 10, secure coding, and API security.',
    icon: <Lock className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: applicationSecurityTopics,
  },
  {
    id: 'cryptography',
    title: 'Cryptography',
    description: 'Encryption, hashing, digital signatures, TLS/SSL.',
    icon: <KeyRound className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: cryptographyTopics,
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    description: 'Reconnaissance, vulnerability assessment, and pentesting.',
    icon: <Target className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: ethicalHackingTopics,
  },
];
