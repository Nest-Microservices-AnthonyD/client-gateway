import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/common';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @IsEnum(OrderStatusList, { message: `valid status are: ${OrderStatusList}` })
  status?: OrderStatus;
}
