import unittest

from app import app


class ProductAddToCartFormTests(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['SECRET_KEY'] = 'test-secret'
        self.client = app.test_client()

    def test_product_page_uses_post_form_for_adding_to_cart(self):
        response = self.client.get('/product/1')
        self.assertEqual(response.status_code, 200)
        html = response.get_data(as_text=True)
        self.assertIn('method="POST"', html)
        self.assertIn('/add_to_cart/1', html)

    def test_add_to_cart_accepts_post_requests_with_quantity(self):
        with self.client.session_transaction() as sess:
            sess.clear()
        response = self.client.post('/add_to_cart/1', data={'qty': '2'})
        self.assertEqual(response.status_code, 302)
        with self.client.session_transaction() as sess:
            self.assertEqual(sess['cart']['1'], 2)


if __name__ == '__main__':
    unittest.main()
