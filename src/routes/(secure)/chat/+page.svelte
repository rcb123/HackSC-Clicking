<script lang="ts">
	import MessageForm from '$components/MessageForm.svelte';
	import Messages from '$root/components/Messages.svelte';
</script>

<div class="pt-[5vh]">
	<div class="relative h-[80vh] w-[90%] bg-gray-50 flex flex-col mx-auto rounded-xl p-8">
		<ul class="flex flex-col-reverse flex-1 overflow-y-auto">
			<Messages />
		</ul>
		<div class="w-full h-16 bg-gray-200 rounded-xl flex items-center justify-evenly">
			<MessageForm />
		</div>
	</div>
</div>
