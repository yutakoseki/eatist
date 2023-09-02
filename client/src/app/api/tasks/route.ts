import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const task = await getAllTask();
  return NextResponse.json(task);
}

export async function POST(request: NextRequest) {
  const { content } = await request.json();

  await prisma.task.create({
    data: {
      content: content,
    },
  });

  const task = await getAllTask();
  return NextResponse.json(task);
}

export async function DELETE(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id')!);

  await prisma.task.delete({
    where: {
      id: id,
    },
  });

  const task = await getAllTask();
  return NextResponse.json(task);
}

async function getAllTask() {
  const task = await prisma.task.findMany();
  return task;
}