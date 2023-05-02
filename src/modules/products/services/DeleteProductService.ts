import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IResponse {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IResponse): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new Error('Product not found');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
