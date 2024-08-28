// app/api/universities/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { name, address, contactNumber, website, admin } = await req.json();
  try {
    const university = await prisma.university.update({
      where: { id },
      data: { name, address, contactNumber, website, admin },
    });
    return NextResponse.json(university);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update university' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  try {
    await prisma.university.delete({ where: { id } });
    return NextResponse.json(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete university' }, { status: 500 });
  }
}
