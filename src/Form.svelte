<script>
  let firstNameError = false;
  let lastNameError = false;
  let emailError = false;
  let passwordError = false;

  // Form inputs
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";

  const checkEmail = (emailToCheck) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return !pattern.test(emailToCheck);
  };

  function validateForm() {
    firstNameError = firstName ? false : true;
    lastNameError = lastName ? false : true;
    passwordError = password ? false : true;
    emailError = checkEmail(email);
  }
</script>

<section class="px-4 py-6">
  <p class="bg-fem_blue mb-5 rounded-md p-4 font-light text-white shadow-md">
    <span class="font-bold">Try it free 7 days</span> then $20/mo. thereafter
  </p>

  <section class="w-full rounded-lg bg-white px-4 py-6 md:p-10">
    <form action="" method="" class="" on:submit|preventDefault={validateForm}>
      <div class="">
        <div class="mb-5 ">
          <input
            bind:value={firstName}
            type="text"
            class="{firstNameError
              ? 'border-fem_red text-fem_red'
              : 'border-fem_grayish_blue'}
            w-full rounded-md border-[1px] py-2 px-4"
            placeholder="First Name"
          />
          <p
            class="{firstNameError
              ? ''
              : 'hidden'} text-fem_red mt-1 text-right text-xs italic"
          >
            First Name cannot be empty
          </p>
        </div>

        <div class="mb-5 ">
          <input
            bind:value={lastName}
            type="text"
            class="{lastNameError
              ? 'border-fem_red text-fem_red'
              : 'border-fem_grayish_blue'}
            w-full rounded-md border-[1px] py-2 px-4"
            placeholder="Last Name"
          />
          <p
            class="{lastNameError
              ? ''
              : 'hidden'} text-fem_red mt-1 text-right text-xs italic"
          >
            Last Name cannot be empty
          </p>
        </div>

        <div class="mb-5 ">
          <input
            bind:value={email}
            type="email"
            class="{emailError
              ? 'border-fem_red text-fem_red'
              : 'border-fem_grayish_blue'}
            w-full rounded-md border-[1px] py-2 px-4"
            placeholder="Email Address"
          />
          <p
            class="{emailError
              ? ''
              : 'hidden'} text-fem_red mt-1 text-right text-xs italic"
          >
            Looks like this is not an email
          </p>
        </div>

        <div class="mb-5 ">
          <input
            bind:value={password}
            type="password"
            class="{passwordError
              ? 'border-fem_red text-fem_red'
              : 'border-fem_grayish_blue'}
            w-full rounded-md border-[1px] py-2 px-4"
            placeholder="Password"
          />
          <p
            class="{passwordError
              ? ''
              : 'hidden'} text-fem_red mt-1 text-right text-xs italic"
          >
            Password cannot be empty
          </p>
        </div>
        <!-- end of form inputs -->

        <button
          type="submit"
          class="bg-fem_green mt-5 block w-full rounded p-3 text-xl
                font-normal text-white shadow-md shadow-emerald-500"
        >
          Claim Your free trial
        </button>
      </div>
    </form>

    <!-- Terms and agreements -->
    <p class="text-fem_grayish_blue mt-6 text-xs font-semibold">
      By clicking the button, you are agreeing to our
      <a href="/" class="text-[hsl(0,_100%,_74%)]">Terms and Services</a>
    </p>
  </section>
</section>

<style></style>
