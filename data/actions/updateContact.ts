'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const data = Object.fromEntries(formData);

  await prisma.contact.update({
    data: {
      avatar: data.avatar as string,
      email: data.email as string,
      first: data.first as string,
      github: data.github as string,
      last: data.last as string,
      notes: data.notes as string,
      position: data.position as string,
    },
    where: { id: contactId },
  });

  revalidatePath('/');
  redirect(`/contacts/${contactId}`);
}
