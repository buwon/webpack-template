import { _ } from '~/global';

void Promise.resolve().then(() => {
  const name: string = null;
  const app = name ?? 'Hello World';

  console.log(app);
});
