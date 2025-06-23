import { Injectable } from '@nestjs/common';

@Injectable()
export class PartnerService {
  private partners = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@techsolutions.com',
      company: 'Tech Solutions',
      status: 'active',
      createdAt: new Date('2024-01-15').toISOString(),
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@digitalmarketing.com',
      company: 'Digital Marketing Pro',
      status: 'pending',
      createdAt: new Date('2024-01-20').toISOString(),
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      email: 'carlos@inovacorp.com',
      company: 'InovaCorp',
      status: 'active',
      createdAt: new Date('2024-01-10').toISOString(),
    }
  ];

  create(createPartnerDto: any) {
    const newPartner = {
      id: this.partners.length + 1,
      ...createPartnerDto,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    this.partners.push(newPartner);
    return newPartner;
  }

  findAll() {
    return this.partners;
  }

  findOne(id: number) {
    const partner = this.partners.find(p => p.id === id);
    if (!partner) {
      throw new Error('Partner not found');
    }
    return partner;
  }

  update(id: number, updatePartnerDto: any) {
    const partnerIndex = this.partners.findIndex(p => p.id === id);
    if (partnerIndex === -1) {
      throw new Error('Partner not found');
    }
    this.partners[partnerIndex] = { ...this.partners[partnerIndex], ...updatePartnerDto };
    return this.partners[partnerIndex];
  }
}
