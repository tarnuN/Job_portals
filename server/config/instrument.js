import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://4cda289e7ac469d95c53e46e35a96f58@o4509546304110592.ingest.us.sentry.io/4509546310598656',
  sendDefaultPii: true,
  integrations:[
    Sentry.nodeContextIntegration(),
    Sentry.mongoIntegration(),
  ],
  //tracesSampleRate:1.0,
});
Sentry.profiler.startProfiler();

