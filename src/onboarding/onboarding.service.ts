import { Injectable } from '@nestjs/common';

@Injectable()
export class OnboardingService {
  processStep(stepData: any) {
    const { step, data } = stepData;

    switch (step) {
      case 'start':
        return {
          message: `Olá ${data.fullName}! Agora preciso do seu e-mail para continuar.`,
          nextStep: 'ask_email'
        };

      case 'ask_email':
        return {
          message: `Obrigado, ${data.email}! Agora preciso do seu CPF para verificação.`,
          nextStep: 'ask_cpf'
        };

      case 'ask_cpf':
        return {
          message: `Perfeito! Por último, qual é o nome da sua empresa ou organização?`,
          nextStep: 'ask_company'
        };

      case 'ask_company':
        return {
          message: `Excelente! Agora vou verificar suas informações para compliance...`,
          nextStep: 'compliance_check'
        };

      case 'compliance_check':
        // Simular verificação de compliance
        const isApproved = Math.random() > 0.3; // 70% de aprovação
        
        if (isApproved) {
          return {
            message: `Parabéns! Suas informações foram aprovadas. Você pode prosseguir para a geração de documentos.`,
            nextStep: 'collect_documents'
          };
        } else {
          return {
            message: `Suas informações precisam de revisão manual. Nossa equipe entrará em contato em até 24 horas.`,
            nextStep: 'manual_review_needed'
          };
        }

      default:
        return {
          message: 'Etapa não reconhecida. Por favor, reinicie o processo.',
          nextStep: 'error'
        };
    }
  }

  startOnboarding(initialData: any) {
    return {
      message: 'Bem-vindo ao processo de onboarding! Vamos começar coletando algumas informações básicas.',
      nextStep: 'start',
      sessionId: Date.now().toString()
    };
  }
}
