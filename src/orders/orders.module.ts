import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';0 
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [NatsModule],
})
export class OrdersModule {}
