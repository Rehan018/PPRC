// script.js

const apiUrl = 'https://crudcrud.com/api/4cb215e85574447b8ae623488b020210/products';
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Function to fetch products
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();

        productList.innerHTML = ''; // Clear the product list
        data.forEach((product) => {
            const productItem = createProductElement(product);
            productList.appendChild(productItem);
        });
    } catch (error) {
        console.error(error);
    }
}

// Function to create a product element
function createProductElement(product) {
    const productItem = document.createElement('div');
    productItem.innerHTML = `
        <p>ProductName:<strong>${product.productName}</strong></p>
        <p>Price: $${product.productPrice}</p>
        <p>Category: ${product.productCategory}</p>
    `;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteProduct(product._id));
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editProduct(product));

    productItem.appendChild(deleteButton);
    productItem.appendChild(editButton);

    return productItem;
}

// Function to add a new product
async function addProduct(product) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Error adding product');
        }
        fetchProducts(); // Refresh the product list
        productForm.reset(); // Clear the form
    } catch (error) {
        console.error(error);
    }
}

// Function to delete a product
async function deleteProduct(productId) {
    try {
        const response = await fetch(`${apiUrl}/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error deleting product');
        }
        fetchProducts(); // Refresh the product list
    } catch (error) {
        console.error(error);
    }
}

// Function to edit a product
async function editProduct(product) {
    const updatedName = prompt('Edit Product Name:', product.productName);
    const updatedPrice = prompt('Edit Product Price:', product.productPrice);
    // const updatedCategory = prompt('Edit Product Category:', product.productCategory);

    if (updatedName !== null && updatedPrice !== null /* && updatedCategory !== null*/) {
        const updatedProduct = {
            productName: updatedName,
            productPrice: parseFloat(updatedPrice),
            // productCategory: updatedCategory,
            productCategory:product.productCategory,// Include the existing category
        };

        try {
            const response = await fetch(`${apiUrl}/${product._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error('Error updating product');
            }
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error(error);
        }
    }
}

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;

    if (productName && productPrice && productCategory) {
        const product = {
            productName,
            productPrice: parseFloat(productPrice),
            productCategory,
        };

        addProduct(product);
    }
});

fetchProducts();
