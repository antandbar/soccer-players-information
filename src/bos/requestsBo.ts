'use strict';

import RequestSchema, { Request } from '../models/Request';

class RequestsBo {
  public async getRequests(): Promise<Request[]> {
    const requests: Request[] = await RequestSchema.findAll();

    return requests;
  }

  public async saveRequest(conversation: string): Promise<Request> {
    const request: Request = await RequestSchema.create({ conversation });
    return request;
  }
}

export const requestsBo = new RequestsBo();
