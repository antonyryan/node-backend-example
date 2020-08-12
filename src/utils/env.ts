import { config } from 'dotenv';

const path = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

config({ path });
