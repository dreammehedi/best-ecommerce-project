function ProductLeft() {
  return (
    <>
      <div className="lg:col-span-3 bg-[#F7F7F8] p-4 md:p-6 rounded-md space-y-5 h-fit">
        {/*   product Category */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl text-black border-b border-border-color pb-2">
            Product Category
          </h2>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Juice & Drinks</label>
            </div>
            <div>[43]</div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Dairy & Milk</label>
            </div>
            <div>[43]</div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Snack & Spice</label>
            </div>
            <div>[43]</div>
          </div>
        </div>

        {/*   filter price */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl text-black border-b border-border-color pb-2">
            Filter Price
          </h2>
          {/* range */}
          <div>
            <input
              id="minmax-range"
              type="range"
              min="20"
              max="250"
              className="w-full h-2 bg-orange-f5 rounded-md appearance-none cursor-pointer"
            />
            <label
              htmlFor="minmax-range"
              className="text-sm text-black font-bold"
            >
              Price: <span className="text-gray-7a">$20 - $250</span>
            </label>
          </div>
        </div>

        {/*   product Color */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl text-black border-b border-border-color pb-2">
            Product Color
          </h2>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Blue</label>
            </div>
            <div className="size-[20px] bg-blue-500 rounded-md"></div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Yellow</label>
            </div>
            <div className="size-[20px] bg-yellow-500 rounded-md"></div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">Red</label>
            </div>
            <div className="size-[20px] bg-red-500 rounded-md"></div>
          </div>
        </div>

        {/*   weight */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl text-black border-b border-border-color pb-2">
            Product Color
          </h2>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">2kg Pack</label>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">20kg Pack</label>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-7a">
            <div>
              <input type="radio" />
              <label className="ml-2">30kg Pack</label>
            </div>
          </div>
        </div>

        {/*   product tags */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl text-black border-b border-border-color pb-2">
            Product Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-md px-4 py-2 border border-border-color my-transition hover:bg-white/50 hover:text-orange-f5 bg-white text-gray-7a text-sm">
              Vegetables
            </button>
            <button className="rounded-md px-4 py-2 border border-border-color my-transition hover:bg-white/50 hover:text-orange-f5 bg-white text-gray-7a text-sm">
              Food
            </button>
            <button className="rounded-md px-4 py-2 border border-border-color my-transition hover:bg-white/50 hover:text-orange-f5 bg-white text-gray-7a text-sm">
              Juice
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductLeft;
