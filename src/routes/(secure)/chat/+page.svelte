<script lang="ts">
	import MessageForm from '$components/MessageForm.svelte';
	import Messages from '$root/components/Messages.svelte';
</script>
<div class="pt-[5vh]">
<div class="max-w-screen-sm relative h-[80vh] w-full bg-gray-100 flex flex-col mx-auto rounded-xl p-8">
	<ul class="flex flex-col-reverse flex-1 overflow-y-auto">
		<Messages />
	</ul>
	<div
		class="w-[100%] h-16 bg-gray-200 rounded-xl flex justify-center items-center"
	>
		<MessageForm />
	</div>
</div>
</div>
