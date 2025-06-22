{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Test, TestingModule \} from '@nestjs/testing';\
import \{ OnboardingService \} from './onboarding.service';\
import \{ PartnerService \} from '../partner/partner.service';\
\
describe('OnboardingService', () => \{\
  let service: OnboardingService;\
\
  const mockPartnerService = \{\
    findByEmail: jest.fn(),\
    create: jest.fn(),\
  \};\
\
  beforeEach(async () => \{\
    const module: TestingModule = await Test.createTestingModule(\{\
      providers: [\
        OnboardingService,\
        \{\
          provide: PartnerService,\
          useValue: mockPartnerService,\
        \},\
      ],\
    \}).compile();\
\
    service = module.get<OnboardingService>(OnboardingService);\
  \});\
\
  it('should be defined', () => \{\
    expect(service).toBeDefined();\
  \});\
\
  it('should handle start step correctly', async () => \{\
    const data = \{ fullName: 'Jo\'e3o Silva' \};\
    const result = await service.processStep('start', data);\
    \
    expect(result.message).toContain('Jo\'e3o Silva');\
    expect(result.nextStep).toBe('ask_email');\
  \});\
\});\
}