'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function favoriteContact(contactId: string, formData: FormData) {
  await slow();

  await prisma.contact.update({
    data: {
      favorite: !(formData.get('favorite') === 'true'),
    },
    where: {
      id: contactId,
    },
  });

  revalidatePath('/');
}
