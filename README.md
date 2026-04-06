нужно сделать регистрацию с 2 компонентами:

1. Поле для ввода данных
2. Окно активации (появляется окно, мы идем активировать по почте, как только активация произошла,
   переход на /)

защита маршрутов. расширение proxy для защиты от маршрутов. 
после выхода не меняется интерфейс


SELECT id, name, slug, price, description, available_quantity, is_active, brand_id, category_id, created_at, updated_at
	FROM public.products;

SELECT
      *
      FROM PRODUCTS p
      JOIN categories c ON c.id = p.category_id
      JOIN product_attribute_values pav ON p.id = pav.product_id
      JOIN attribute_values av ON av.id = pav.attribute_value_id
      JOIN attributes a ON a.id = av.attribute_id
      WHERE p.slug = 'oak-kitchen-dining-chair'

create view product_all_info as
SELECT
      p.id, p.name, p.slug, p.price, p.description, p.available_quantity, p.is_active, p.brand_id, p.category_id, p.created_at, p.updated_at
      FROM PRODUCTS p
      JOIN categories c ON c.id = p.category_id
      JOIN product_attribute_values pav ON p.id = pav.product_id
      JOIN attribute_values av ON av.id = pav.attribute_value_id
      JOIN attributes a ON a.id = av.attribute_id
      WHERE p.slug = 'oak-kitchen-dining-chair'

select * from product_full_json
      WHERE slug = 'oak-kitchen-dining-chair'


CREATE VIEW product_full_json AS
SELECT
  p.id,
  p.slug,
  p.category_id,
  jsonb_build_object(
    'id', p.id,
    'name', p.name,
    'slug', p.slug,
    'price', p.price,
    'availableQuantity', p.available_quantity,
    'isActive', p.is_active,
    'description', p.description,
    'category', jsonb_build_object(
      'id', c.id,
      'name', c.name,
	  'slug', c.slug,
	  'parentId', c.parent_id
    ),
    'productImages', (
      SELECT jsonb_agg(
        jsonb_build_object(
          'id', pi.id,
          'url', pi.url,
          'position', pi.position,
          'isMain', pi.is_main,
		  'productId', pi.product_id
        )
      )
      FROM product_images pi
      WHERE pi.product_id = p.id
    ),
    'attributes', (
      SELECT jsonb_agg(
        jsonb_build_object(
          'id', a.id,
          'name', a.name,
		  'attributeGroupId', a.attribute_group_id,
          'values', (
            SELECT jsonb_agg(
              jsonb_build_object(
			  	'id', av.id,
                'value', av.value,
				'slug', av.slug,
				'attributeId', av.attribute_id
              )
            )
            FROM product_attribute_values pav
            JOIN attribute_values av ON av.id = pav.attribute_value_id
            WHERE pav.product_id = p.id
              AND av.attribute_id = a.id
          )
        )
      )
      FROM attributes a
      JOIN attribute_groups ag ON ag.id = a.attribute_group_id
      JOIN category_attribute_groups cag ON cag.attribute_group_id = ag.id
      WHERE cag.category_id = p.category_id
	  AND EXISTS (                              
          SELECT 1
          FROM product_attribute_values pav
          JOIN attribute_values av ON av.id = pav.attribute_value_id
          WHERE pav.product_id = p.id
            AND av.attribute_id = a.id
        )
    )
  ) AS product
FROM products p
JOIN categories c ON c.id = p.category_id;


Select * from product_full_json 
      WHERE slug = 'divan-uglovoy-milan'
	  

select * from product_images
select * from products where id = 'dca9b195-a7b5-4c35-912b-b37fd8d53332'
select * from users
select * from tokens