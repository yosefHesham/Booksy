const Skeleton = () => {
  return (
    <div class="border border-bg shadow rounded-md p-4  h-64 max-w-sm w-full mx-auto max-height mb-5">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-5/6 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
