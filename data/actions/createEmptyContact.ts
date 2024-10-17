'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function createEmptyContact() {
  await slow();

  const contact = await prisma.contact.create({
    data: {},
  });

  revalidatePath('/');
  redirect(`/contacts/${contact.id}/edit`);
}
