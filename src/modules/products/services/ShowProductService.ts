import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IResponse {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IResponse): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
