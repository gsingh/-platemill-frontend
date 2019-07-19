import { IEventOfPlateMill } from '@/shared/model/event-of-plate-mill.model';

export interface IVideoOfEvent {
  id?: number;
  videoDate?: Date;
  videoType?: string;
  videoFileContentType?: string;
  videoFile?: any;
  eventPM?: IEventOfPlateMill;
}

export class VideoOfEvent implements IVideoOfEvent {
  constructor(
    public id?: number,
    public videoDate?: Date,
    public videoType?: string,
    public videoFileContentType?: string,
    public videoFile?: any,
    public eventPM?: IEventOfPlateMill
  ) {}
}
