<script>
  let xTilt = 0; // X轴倾斜角度
  let yTilt = 0; // Y轴倾斜角度

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // 鼠标在图片内的X坐标
    const y = event.clientY - rect.top; // 鼠标在图片内的Y坐标
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 根据鼠标位置计算倾斜角度，限制最大倾斜为 10 度
    xTilt = ((x - centerX) / centerX) * 10; // 水平方向
    yTilt = ((y - centerY) / centerY) * -10; // 垂直方向（负号反转）
  };

  const resetTilt = () => {
    xTilt = 0;
    yTilt = 0;
  };
</script>

<style>
  .image-container {
    perspective: 1000px; /* 设置3D视角 */
    display: inline-block;
  }

  .image {
    width: 300px;
    height: 200px;
    transform-origin: center; /* 以图片中心为变换基点 */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .image:hover {
    transform: scale(1.2); /* 悬浮时轻微放大 */
  }
</style>

<div class="min-h-[calc(100vh-2.5rem)] flex flex-col justify-center items-center">
<div
  class="image-container"
  on:mousemove={handleMouseMove}
  on:mouseleave={resetTilt}
>
  <img
    class="image"
    src="https://via.placeholder.com/300x200"
    alt="示例图片"
    style="transform: scale(1.2) rotateX({yTilt}deg) rotateY({xTilt}deg);"
  />
</div>

</div>

