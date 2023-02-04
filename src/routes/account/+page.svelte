<script lang="ts">
	let username = 'User1';
</script>

<div class="flex h-screen bg-slate-100">
	<div class="m-auto w-[75vw]">
		<div class="flex flex-row items-center mb-4">
			<div class="avatar">
				<div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<img src="https://www.w3schools.com/howto/img_avatar.png" />
				</div>
			</div>
			<h1 class="text-2xl ml-6">Welcome back {username}</h1>
		</div>
        <div>
            <h1 class="text-2xl mb-4">Your Movie Cards:</h1>
            <div class="grid w-full justify-evenly grid-cols-3">
                <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie1</h2>
                        <p>Movie Description</p>
                    </div>
                </div>

                <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie2</h2>
                        <p>Movie Description</p>
                    </div>
                </div>

                <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie3</h2>
                        <p>Movie Description</p>
                    </div>
                </div>

                <!-- <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie1</h2>
                        <p>Movie Description</p>
                    </div>
                </div>

                <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie2</h2>
                        <p>Movie Description</p>
                    </div>
                </div>

                <div class="card w-[23vw] bg-base-100 shadow-xl mb-4">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt="Movie Cover"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Movie3</h2>
                        <p>Movie Description</p>
                    </div>
                </div> -->
                
            </div>
        </div>
	</div>
</div>
