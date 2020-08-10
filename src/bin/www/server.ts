import '../../utils/env';
import '../../utils/connection';
import { logger } from '../../utils';

import app from '../../app';

app.listen(process.env.PORT, () => logger.info(`Server started! http://localhost:${process.env.PORT}`));
