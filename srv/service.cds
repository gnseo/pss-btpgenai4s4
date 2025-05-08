using { gnseo_STUDENTH21 as my } from '../db/schema.cds';

@path: '/service/gnseo_STUDENTH21'
@requires: 'authenticated-user'
service gnseo_STUDENTH21Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}