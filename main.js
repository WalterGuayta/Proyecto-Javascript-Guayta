const botoncarrito = document.querySelector('.container-cart-icon');
const contenedorProductosCarrito = document.querySelector('.container-cart-products');

botoncarrito.addEventListener('click', () => {
	contenedorProductosCarrito.classList.toggle('hidden-cart');
});

//const cartInfo = document.querySelector('.cart-product');
const filaProductos = document.querySelector('.row-product');

const listaProductos = document.querySelector('.container-items');

let totalProductos = [];

const valorTotal = document.querySelector('.total-pagar');

const contadorProductos = document.querySelector('#contador-productos');

const carritoVacio = document.querySelector('.cart-empty');

const totalCarrito = document.querySelector('.cart-total');

let vaciarCarrito = document.querySelector('btn-vaciar');

let confirmarCompra =document.querySelector("confirmar")


listaProductos.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = totalProductos.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = totalProductos.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			totalProductos = [...products];
		} else {
			totalProductos = [...totalProductos, infoProduct];
		}

		showHTML();
	}
});

filaProductos.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		totalProductos = totalProductos.filter(
			product => product.title !== title
		);

		console.log(totalProductos);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!totalProductos.length) {
		carritoVacio.classList.remove('hidden');
		filaProductos.classList.add('hidden');
		totalCarrito.classList.add('hidden');
	} else {
		carritoVacio.classList.add('hidden');
		filaProductos.classList.remove('hidden');
		totalCarrito.classList.remove('hidden');
	}


	// Limpiar HTML
	filaProductos.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;


	totalProductos.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		filaProductos.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	contadorProductos.innerText = totalOfProducts;
};

confirmarCompra.addEventListener("click", (e)=>{
	console.log("Gracias por su Compra")
})


 
	

	
