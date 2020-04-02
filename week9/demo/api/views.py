from django.core.serializers import json
from django.http import JsonResponse, HttpResponse, HttpRequest
from api.models import Product, Category
from django.shortcuts import render

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)



def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    return JsonResponse(product.to_json(), safe=False)

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)



def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    return JsonResponse(category.to_json(), safe=False)




def category_products(request, categId):
    try:
        products = Product.objects.filter(category_id=categId)
        products_json = [product.to_json() for product in products]
    except Product.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    return JsonResponse(products_json, safe=False)
