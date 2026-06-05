import type { TopicItem } from '@/data/topics';
import asymmetric_encryption from './asymmetric-encryption.mdx?raw';
import digital_signatures from './digital-signatures.mdx?raw';
import hashing from './hashing.mdx?raw';
import introduction from './introduction.mdx?raw';
import symmetric_encryption from './symmetric-encryption.mdx?raw';
import tls_ssl from './tls-ssl.mdx?raw';

export const cryptographyTopics: TopicItem[] = [
  { id: 'cryptography-asymmetric-encryption', title: 'Asymmetric Encryption', content: asymmetric_encryption },
  { id: 'cryptography-digital-signatures', title: 'Digital Signatures', content: digital_signatures },
  { id: 'cryptography-hashing', title: 'Hashing', content: hashing },
  { id: 'cryptography-introduction', title: '📖 Introduction', content: introduction },
  { id: 'cryptography-symmetric-encryption', title: 'Symmetric Encryption', content: symmetric_encryption },
  { id: 'cryptography-tls-ssl', title: 'Tls Ssl', content: tls_ssl },
];
