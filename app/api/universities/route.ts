// app/api/universities/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, address, contactNumber, website, admin } = await req.json();
  try {
    const university = await prisma.university.create({
      data: {
        name,
        address,
        contactNumber,
        website,
        admin,
      },
    });
    return NextResponse.json(university, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create university' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const universities = await prisma.university.findMany();
    return NextResponse.json(universities);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve universities' }, { status: 500 });
  }
}
