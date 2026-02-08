import type { PlaceHolderImages } from './placeholder-images';

export const caseUpdates = [
  {
    id: '1',
    title: 'Landmark Ruling in Property Dispute Case',
    date: '2024-05-15',
    content: 'Achieved a significant victory for our client in a complex ancestral property dispute, setting a new precedent in the state. The case involved intricate matters of succession law and evidence evaluation. (BCI-compliant content: No confidential details are shared).',
    imageId: 'update-image-1',
  },
  {
    id: '2',
    title: 'Successful Bail Application in High-Profile Criminal Matter',
    date: '2024-04-22',
    content: 'Successfully argued for and secured bail for a client in a widely-publicized criminal case. The argument focused on fundamental rights and the principles of justice. (BCI-compliant content: No confidential details are shared).',
    imageId: 'update-image-2',
  },
  {
    id: '3',
    title: 'Writ Petition Admitted in Jharkhand High Court',
    date: '2024-03-10',
    content: 'Our writ petition challenging an administrative action on grounds of procedural irregularity has been admitted by the Hon\'ble High Court. The matter is now listed for further hearing. (BCI-compliant content: No confidential details are shared).',
    imageId: 'update-image-3',
  },
];

export const contactSubmissions = [
    {
        id: 'sub1',
        name: 'Rohan Sharma',
        phone: '+919876543210',
        issue: 'I need advice on a property matter. My uncle has illegally occupied our ancestral land and I want to understand my legal options.',
        submittedAt: new Date('2024-05-20T10:30:00Z'),
    },
    {
        id: 'sub2',
        name: 'Priya Singh',
        phone: '+919123456789',
        issue: 'My business partner is not honoring our contract. I need to send a legal notice and potentially file a suit for breach of contract.',
        submittedAt: new Date('2024-05-19T15:00:00Z'),
    },
    {
        id: 'sub3',
        name: 'Amit Kumar',
        phone: '+919998887776',
        issue: 'I have been falsely implicated in a criminal case. I am looking for urgent legal assistance for my defense.',
        submittedAt: new Date('2024-05-18T11:45:00Z'),
    }
]

export type CaseUpdate = typeof caseUpdates[0];
export type ContactSubmission = typeof contactSubmissions[0];
