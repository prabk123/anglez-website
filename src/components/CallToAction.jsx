/* This example requires Tailwind CSS v3.0+ */
export function CallToAction() {
  return (
    <div className="bg-blue-700">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            10x your creative production today.
            <br />
            Create a million dollar ad tomorrow.
          </h2>
          {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p> */}
          <div className="mt-10 items-center justify-center gap-x-6 sm:flex">
            <div className="relative mb-4 rounded-md border border-gray-50 px-3 py-2 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white sm:mb-0 sm:w-[300px]">
              <label
                htmlFor="name"
                className="absolute -top-2 left-2 -mt-px inline-block bg-blue-700 px-1 text-xs font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full border-0 bg-transparent p-0 text-white placeholder-gray-50 focus:ring-0 sm:text-sm"
                placeholder="jane.doe@gmail.com"
              />
            </div>
            <button
              href="#"
              className="w-full rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Get started for free!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
