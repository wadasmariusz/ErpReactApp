import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/pigeonNotices`;

export const pigeonNoticesRoutes = {
  'app.pigeonNotices': `${prefix}`,
  //,
  'app.pigeonNotice.create': `${prefix}/create`,
  'app.pigeonNotice': (dId = ':pigeonNoticeId') => `${prefix}/${dId}`,
  'app.pigeonNotice.edit': (dId = ':pigeonNoticeId') => `${prefix}/${dId}/edit`,
}
