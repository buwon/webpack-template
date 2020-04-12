import { _ } from '~/global';

Promise.resolve().then(() => {
  const name = null;
  const app = name ?? 'Hello World';

  console.log(app);
});
