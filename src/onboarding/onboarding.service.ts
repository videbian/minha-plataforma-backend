{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Injectable \} from '@nestjs/common';\
import \{ PartnerService \} from '../partner/partner.service';\
import axios from 'axios';\
\
@Injectable()\
export class OnboardingService \{\
  constructor(private partnerService: PartnerService) \{\}\
\
  async processStep(step: string, data: any): Promise<\{ message: string; nextStep: string \}> \{\
    switch (step) \{\
      case 'start':\
        return this.handleStart(data);\
      case 'ask_email':\
        return this.handleEmail(data);\
      case 'ask_cpf':\
        return this.handleCPF(data);\
      case 'ask_company':\
        return this.handleCompany(data);\
      case 'compliance_check':\
        return this.handleComplianceCheck(data);\
      default:\
        return \{ message: 'Etapa n\'e3o reconhecida.', nextStep: 'error' \};\
    \}\
  \}\
\
  private async handleStart(data: any): Promise<\{ message: string; nextStep: string \}> \{\
    if (!data.fullName || data.fullName.trim().length === 0) \{\
      return \{ message: 'Por favor, informe um nome v\'e1lido.', nextStep: 'start' \};\
    \}\
\
    // Simple AI-powered name validation\
    const isValidName = await this.validateNameWithAI(data.fullName);\
    if (!isValidName) \{\
      return \{ \
        message: 'O nome informado parece n\'e3o ser v\'e1lido. Por favor, informe seu nome completo.', \
        nextStep: 'start' \
      \};\
    \}\
\
    return \{ \
      message: `Ol\'e1, $\{data.fullName\}! Agora preciso do seu e-mail para continuar.`, \
      nextStep: 'ask_email' \
    \};\
  \}\
\
  private async handleEmail(data: any): Promise<\{ message: string; nextStep: string \}> \{\
    if (!this.isValidEmail(data.email)) \{\
      return \{ message: 'Por favor, informe um e-mail v\'e1lido.', nextStep: 'ask_email' \};\
    \}\
\
    // Check if partner already exists\
    const existingPartner = await this.partnerService.findByEmail(data.email);\
    if (existingPartner) \{\
      return \{ \
        message: 'Este e-mail j\'e1 est\'e1 cadastrado em nosso sistema.', \
        nextStep: 'error' \
      \};\
    \}\
\
    return \{ \
      message: 'Perfeito! Agora preciso do seu CPF para verifica\'e7\'e3o.', \
      nextStep: 'ask_cpf' \
    \};\
  \}\
\
  private async handleCPF(data: any): Promise<\{ message: string; nextStep: string \}> \{\
    if (!this.isValidCPF(data.cpf)) \{\
      return \{ message: 'Por favor, informe um CPF v\'e1lido.', nextStep: 'ask_cpf' \};\
    \}\
\
    return \{ \
      message: 'Qual \'e9 o nome da sua empresa ou organiza\'e7\'e3o?', \
      nextStep: 'ask_company' \
    \};\
  \}\
\
  private async handleCompany(data: any): Promise<\{ message: string; nextStep: string \}> \{\
    if (!data.company || data.company.trim().length === 0) \{\
      return \{ message: 'Por favor, informe o nome da empresa.', nextStep: 'ask_company' \};\
    \}\
\
    return \{ \
      message: 'Obrigado! Agora vou verificar suas informa\'e7\'f5es para compliance.', \
      nextStep: 'compliance_check' \
    \};\
  \}\
\
  private async handleComplianceCheck(data: any): Promise<\{ message: string; nextStep: string \}> \{\
    try \{\
      // AI-powered compliance pre-filtering\
      const complianceResult = await this.performAIComplianceCheck(data);\
      \
      if (complianceResult.needsManualReview) \{\
        return \{ \
          message: 'Suas informa\'e7\'f5es foram recebidas e est\'e3o sendo analisadas. Entraremos em contato em breve.', \
          nextStep: 'manual_review_needed' \
        \};\
      \}\
\
      if (complianceResult.approved) \{\
        // Create partner\
        await this.partnerService.create(\{\
          email: data.email,\
          name: data.fullName,\
          company: data.company,\
          status: 'active',\
        \});\
\
        return \{ \
          message: 'Parab\'e9ns! Seu cadastro foi aprovado. Bem-vindo \'e0 nossa plataforma!', \
          nextStep: 'collect_documents' \
        \};\
      \} else \{\
        return \{ \
          message: 'Infelizmente, n\'e3o foi poss\'edvel aprovar seu cadastro no momento.', \
          nextStep: 'error' \
        \};\
      \}\
    \} catch (error) \{\
      console.error('Erro na verifica\'e7\'e3o de compliance:', error);\
      return \{ \
        message: 'Ocorreu um erro na verifica\'e7\'e3o. Por favor, tente novamente.', \
        nextStep: 'error' \
      \};\
    \}\
  \}\
\
  private async validateNameWithAI(name: string): Promise<boolean> \{\
    // Simulate AI validation - in real implementation, this would call an LLM\
    const words = name.trim().split(' ');\
    return words.length >= 2 && words.every(word => word.length > 1);\
  \}\
\
  private async performAIComplianceCheck(data: any): Promise<\{ approved: boolean; needsManualReview: boolean; reason?: string \}> \{\
    // Simulate AI-powered compliance check\
    // In real implementation, this would integrate with LLM and compliance APIs\
    \
    // Simple rules for demonstration\
    const suspiciousPatterns = ['test', 'fake', 'dummy', '123'];\
    const hasSuspiciousData = suspiciousPatterns.some(pattern => \
      data.fullName.toLowerCase().includes(pattern) || \
      data.company.toLowerCase().includes(pattern)\
    );\
\
    if (hasSuspiciousData) \{\
      return \{ approved: false, needsManualReview: true, reason: 'Suspicious data patterns detected' \};\
    \}\
\
    // Simulate external API calls for compliance\
    try \{\
      // Mock Sumsub integration\
      const sumsubResult = await this.mockSumsubCheck(data);\
      \
      // Mock ComplyAdvantage integration\
      const complyAdvantageResult = await this.mockComplyAdvantageCheck(data);\
\
      if (!sumsubResult.passed || !complyAdvantageResult.passed) \{\
        return \{ approved: false, needsManualReview: true, reason: 'Failed compliance checks' \};\
      \}\
\
      return \{ approved: true, needsManualReview: false \};\
    \} catch (error) \{\
      return \{ approved: false, needsManualReview: true, reason: 'API integration error' \};\
    \}\
  \}\
\
  private async mockSumsubCheck(data: any): Promise<\{ passed: boolean \}> \{\
    // Mock Sumsub API call\
    return new Promise(resolve => \{\
      setTimeout(() => \{\
        resolve(\{ passed: true \}); // Simulate successful check\
      \}, 100);\
    \});\
  \}\
\
  private async mockComplyAdvantageCheck(data: any): Promise<\{ passed: boolean \}> \{\
    // Mock ComplyAdvantage API call\
    return new Promise(resolve => \{\
      setTimeout(() => \{\
        resolve(\{ passed: true \}); // Simulate successful check\
      \}, 100);\
    \});\
  \}\
\
  private isValidEmail(email: string): boolean \{\
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\
    return emailRegex.test(email);\
  \}\
\
  private isValidCPF(cpf: string): boolean \{\
    // Simple CPF validation (remove spaces and dashes)\
    const cleanCPF = cpf.replace(/[^\\d]/g, '');\
    return cleanCPF.length === 11 && !this.isSequentialNumbers(cleanCPF);\
  \}\
\
  private isSequentialNumbers(str: string): boolean \{\
    return str === str[0].repeat(str.length);\
  \}\
\}\
}