<script>
	import { page } from "$app/stores";
	import Button from "../lib/components/Button.svelte";
	import Input from "../lib/components/Input.svelte";

	$: form = $page.form;
</script>

<section class="py-6 px-4">
	<p class="bg-fem_blue rounded-md font-light text-white mb-5 p-4">
		<span class="font-bold">Try it free 7 days</span> then $20/mo. thereafter
	</p>

	<form action="/" method="post" class="bg-white rounded-xl w-full p-6 md:p-10">
		<fieldset class="flex flex-col gap-3">
			<div class="">
				<Input
					name="firstName"
					placeholder="First Name"
					value="{form?.data?.firstName ?? ''}"
					hasError="{form?.errors?.firstName}"
				/>
				{#if form?.errors?.firstName}
					<small class="mt-1 text-fem_red text-xs px-2 italic">
						{form?.errors?.firstName[0]}
					</small>
				{/if}
			</div>

			<div class="">
				<Input
					name="lastName"
					placeholder="Last Name"
					value="{form?.data?.lastName ?? ''}"
					hasError="{form?.errors?.lastName}"
				/>
				{#if form?.errors?.lastName}
					<small class="mt-1 text-fem_red text-xs px-2 italic">
						{form?.errors?.lastName[0]}
					</small>
				{/if}
			</div>

			<div class="">
				<Input
					type="email"
					name="email"
					placeholder="Email Address"
					value="{form?.data?.email ?? ''}"
					hasError="{form?.errors?.email}"
				/>
				{#if form?.errors?.email}
					<small class="mt-1 text-fem_red text-xs px-2 italic">
						{form?.errors?.email[0]}
					</small>
				{/if}
			</div>

			<div class="">
				<Input
					type="password"
					name="password"
					placeholder="Password"
					value="{form?.data?.password ?? ''}"
					hasError="{form?.errors?.password}"
				/>
				{#if form?.errors?.password}
					<small class="mt-1 text-fem_red text-xs px-2 italic">
						{form?.errors?.password[0]}
					</small>
				{/if}
			</div>

			<Button />
		</fieldset>

		<!-- Terms and agreements -->
		<small class="font-semibold mt-6 text-fem_grayish_blue text-xs block">
			By clicking the button, you are agreeing to our
			<a href="/" class="text-fem_red">Terms and Services</a>
		</small>
	</form>
</section>
