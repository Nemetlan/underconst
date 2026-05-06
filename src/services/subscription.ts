export async function subscribeToNewsletter(email: string): Promise<boolean> {
  if (!email.includes('@')) return false;

  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Subscribed: ${email}`);
      resolve(true);
    }, 1200);
  });
}
