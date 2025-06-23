import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentGenerationService {
  private documents = new Map();

  generateContract(contractData: any) {
    const documentId = `contract_${Date.now()}`;
    const contract = {
      id: documentId,
      type: 'contract',
      title: 'Contrato de Parceria',
      content: this.generateContractContent(contractData),
      createdAt: new Date().toISOString(),
      status: 'generated',
      downloadUrl: `https://example.com/documents/${documentId}.pdf`
    };
    
    this.documents.set(documentId, contract );
    return contract;
  }

  generatePolicy(policyData: any) {
    const documentId = `policy_${Date.now()}`;
    const policy = {
      id: documentId,
      type: 'policy',
      title: 'Política de Parceria',
      content: this.generatePolicyContent(policyData),
      createdAt: new Date().toISOString(),
      status: 'generated',
      downloadUrl: `https://example.com/documents/${documentId}.pdf`
    };
    
    this.documents.set(documentId, policy );
    return policy;
  }

  generateTerms(termsData: any) {
    const documentId = `terms_${Date.now()}`;
    const terms = {
      id: documentId,
      type: 'terms',
      title: 'Termos e Condições',
      content: this.generateTermsContent(termsData),
      createdAt: new Date().toISOString(),
      status: 'generated',
      downloadUrl: `https://example.com/documents/${documentId}.pdf`
    };
    
    this.documents.set(documentId, terms );
    return terms;
  }

  getAvailableTemplates() {
    return [
      {
        id: 'contract_basic',
        name: 'Contrato Básico de Parceria',
        description: 'Template padrão para contratos de parceria',
        type: 'contract'
      },
      {
        id: 'policy_standard',
        name: 'Política Padrão de Parceria',
        description: 'Política padrão com termos e condições',
        type: 'policy'
      },
      {
        id: 'terms_general',
        name: 'Termos Gerais de Uso',
        description: 'Termos e condições gerais da plataforma',
        type: 'terms'
      }
    ];
  }

  getDocument(id: string) {
    const document = this.documents.get(id);
    if (!document) {
      throw new Error('Document not found');
    }
    return document;
  }

  private generateContractContent(data: any): string {
    return `
CONTRATO DE PARCERIA

Partes:
- Empresa: ${data.companyName || 'Nome da Empresa'}
- Parceiro: ${data.partnerName || 'Nome do Parceiro'}

Este contrato estabelece os termos e condições da parceria entre as partes mencionadas acima.

1. OBJETO DO CONTRATO
O presente contrato tem por objeto estabelecer uma parceria comercial para [descrever atividades].

2. OBRIGAÇÕES DAS PARTES
[Detalhes das obrigações]

3. VIGÊNCIA
Este contrato terá vigência de ${data.duration || '12 meses'} a partir da data de assinatura.

Data: ${new Date().toLocaleDateString('pt-BR')}
    `.trim();
  }

  private generatePolicyContent(data: any): string {
    return `
POLÍTICA DE PARCERIA

1. INTRODUÇÃO
Esta política estabelece as diretrizes para parcerias da empresa ${data.companyName || 'Nossa Empresa'}.

2. CRITÉRIOS DE SELEÇÃO
[Critérios para seleção de parceiros]

3. PROCESSO DE ONBOARDING
[Processo de integração de novos parceiros]

4. RESPONSABILIDADES
[Responsabilidades de cada parte]

Data de criação: ${new Date().toLocaleDateString('pt-BR')}
    `.trim();
  }

  private generateTermsContent(data: any): string {
    return `
TERMOS E CONDIÇÕES DE USO

1. ACEITAÇÃO DOS TERMOS
Ao utilizar nossa plataforma, você concorda com estes termos.

2. USO DA PLATAFORMA
[Regras de uso da plataforma]

3. RESPONSABILIDADES DO USUÁRIO
[Responsabilidades dos usuários]

4. LIMITAÇÕES DE RESPONSABILIDADE
[Limitações legais]

Última atualização: ${new Date().toLocaleDateString('pt-BR')}
    `.trim();
  }
}
