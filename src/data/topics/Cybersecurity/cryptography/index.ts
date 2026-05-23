import type { TopicItem } from '@/data/topics';
import asymmetric_encryption from './asymmetric-encryption.md?raw';
import digital_signatures from './digital-signatures.md?raw';
import hashing from './hashing.md?raw';
import introduction from './introduction.md?raw';
import symmetric_encryption from './symmetric-encryption.md?raw';
import tls_ssl from './tls-ssl.md?raw';

export const cryptographyTopics: TopicItem[] = [
  { id: 'cryptography-asymmetric-encryption', title: 'Asymmetric Encryption', content: asymmetric_encryption },
  { id: 'cryptography-digital-signatures', title: 'Digital Signatures', content: digital_signatures },
  { id: 'cryptography-hashing', title: 'Hashing', content: hashing },
  { id: 'cryptography-introduction', title: '📖 Introduction', content: introduction },
  { id: 'cryptography-symmetric-encryption', title: 'Symmetric Encryption', content: symmetric_encryption },
  { id: 'cryptography-tls-ssl', title: 'Tls Ssl', content: tls_ssl },
];
