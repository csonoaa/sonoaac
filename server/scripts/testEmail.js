import { sendEmail } from '../utils/email.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../../.env') });

const testEmail = async () => {
  try {
    console.log('Sending test email...');
    
    await sendEmail({
      to: 'sonoaabarah@gmail.com',
      subject: 'Template Shop - Test Email',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email from the Template Shop application.</p>
        <p>If you're receiving this, it means the email service is configured correctly!</p>
        <p>Time sent: ${new Date().toLocaleString()}</p>
      `
    });

    console.log('Test email sent successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error sending test email:', error);
    process.exit(1);
  }
};

testEmail(); 