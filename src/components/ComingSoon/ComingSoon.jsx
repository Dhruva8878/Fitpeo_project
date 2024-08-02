export const ComingSoon = () => {
  return (
    <div class="flex space-x-2 min-h-[90vh] justify-center items-center w-full bg-gray-900 ">
      <span class="sr-only">Loading...</span>
      <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.05s]"></div>
      <div class="text-white animate-bounce text-3xl">Coming Soon</div>
    </div>
  );
};
